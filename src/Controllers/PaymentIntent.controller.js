require("dotenv").config();

const stripe = require("stripe")(process.env.SECRET_KEY);
const Payment = require("../Model/PaymentSchema.model");

// Create new Payment Intent Logic
const createPaymentIntent = async (req, res, next) => {
  try {
    const { email, amount } = req.body;

if(!email || !amount){
  res.status(400).send("Invalid or missing email or amount")
}
    console.log(email, amount);
    const customer = await stripe.customers.create({
      email,
    });

    // -------------- create payment method --------------------
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        token: "tok_visa",
      },
    });

    // ------------ attaching the customer to payment method ----------------

    const paymentMethodAttach = await stripe.paymentMethods.attach(
      paymentMethod.id,
      {
        customer: customer.id,
      }
    );

    //   ------------ creating payment method -----------------

    const currency = "INR";
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: currency,
      customer: customer.id,
      payment_method: paymentMethod.id,
      description: "Creating Payment Intent",
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });
    console.log(paymentIntent.id);

    const payment = await Payment.create({
      intendId: paymentIntent.id,
      amount,
      currency: "INR",
      customerID: customer.id,
      userEmail: email,
      description: "Creating Payment Intent",
    });

    res.status(200).send({ paymentIntent });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

// Capture a Payment Intent
const capturePaymentIntent = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentIntent = await stripe.paymentIntents.retrieve(id);

    if (paymentIntent.status === "succeeded") {
      return res
        .status(400)
        .send({ message: `The Payment of PaymentID: ${id}, already captured` });
    }

    const confirm = await stripe.paymentIntents.confirm(id);

    const paymentIntentCapture = await stripe.paymentIntents.capture(id);

    res.status(200).send({ paymentIntentCapture });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Create and check a refund
const createRefund = async (req, res) => {
  try {
    const { id } = req.params;

    const refund = await stripe.refunds.create({
      payment_intent: id,
    });

    res.status(200).send({ refund });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Get all the created Payment Intents
const allIntents = async (req, res) => {
  try {
    const paymentIntents = await stripe.paymentIntents.list();

    res.status(200).send({ AllIntents: paymentIntents });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = {
  createPaymentIntent,
  capturePaymentIntent,
  createRefund,
  allIntents,
};

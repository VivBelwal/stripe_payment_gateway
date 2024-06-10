require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require("express");
const cors = require("cors");
const connect = require("./src/Config/db");

// Swagger doc and Swagger UI 
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');


// SwaggerJS doc options
const options = {
    // failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Stripe_Payment",
        version: "1.0.0",
      },
      servers: [
        {
          "url" : "https://stripe-payment-gateway.onrender.com/api/v1"
        },
        {
            "url" : "http://localhost:8080/api/v1"
        }
      ]
    },
    apis: ["../Routes/*.js", "../Controllers/*.js"],
  };
   
const openapiSpecification = swaggerJsdoc(options);

// app.use 
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))


// ------------ Routes ----------------------
const paymentIntentRoutes = require("./src/Routes/PaymentIntent.route");
app.use("/api/v1", paymentIntentRoutes);

app.listen(PORT, async (req, res) => {
  try {
    await connect();
    console.log(`listening http://localhost:${PORT}`);
  } catch (err) {
    console.log(err);
  }
});

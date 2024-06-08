require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require("express");
const cors = require("cors");
const connect = require("./src/Config/db");

const app = express();
app.use(express.json());
app.use(cors());

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

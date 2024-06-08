const {createPaymentIntent, capturePaymentIntent , createRefund, allIntents} = require("../Controllers/PaymentIntent.controller");
const express = require('express');
const app = express.Router();


app.post('/create_intent', createPaymentIntent);
app.post('/capture_intent/:id', capturePaymentIntent);
app.post('/create_refund/:id', createRefund);
app.get('/get_intents', allIntents);


module.exports = app
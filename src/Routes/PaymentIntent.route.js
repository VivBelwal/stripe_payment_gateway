const {createPaymentIntent, capturePaymentIntent , createRefund, allIntents} = require("../Controllers/PaymentIntent.controller");
const express = require('express');
const app = express.Router();

/**
 * @swagger
 * /create_intent:
 *   post:
 *     summary: Create Payment Intent
 *     description: Creates a new Payment Intent for processing a payment.
 *     tags:
 *       - Payments Intent
 *     requestBody:
 *       description: The details of the payment to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *                 description: The amount to be charged, in rupees.
 *               email:
 *                  type: string
 *                  description: The email address of the customer
 *             required:
 *               - amount
 *               - email
 *     responses:
 *       200:
 *         description: Returns a Payment Intent object.
 *         content:
 *         application/json:
 *           schema:
 *             type: object
 * 
 *       500:
 *         description: Invalid request, typically due to missing or incorrect parameters.
 */


app.post('/create_intent', createPaymentIntent);


/**
 * @swagger
 * /capture_intent/{id}}:
 *   post:
 *     summary: Capture Payment Intent
 *     description: Captures a Payment Intent.
 * tags:
 *       - Payments Intent
 *     parameters:
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The payment intent ID
 *     responses:
 *       200:
 *         description: Returns a Payment Capture object.
 
 *       400:
 *         description: Invalid request, typically due to missing or incorrect parameters.
 */
app.post('/capture_intent/:id', capturePaymentIntent);

/**
 * @swagger
 * /create_refund/{id}:
 *   post:
 *     summary: Create Refund 
 *     description: Creates a Refund
  *     parameters: Payment Intent ID
*    tags: [Payments]
 *     responses:
 *       200:
 *         description: Returns a Refund object.
 
 *       400:
 *         description: Invalid request, typically due to missing or incorrect parameters.
 */
app.post('/create_refund/:id', createRefund);


/**
 * @swagger
 * /get_intents:
 * 
 *   get:
 *     summary: Get all the payment intent
 *     description: Get all the payment intent array cereated till
 *      tags:[Payments]
 *     responses:
 *       200:
 *         description: Returns All the Payment Intent Created in array.
 
 *       400:
 *         description: Invalid request, typically due to missing or incorrect parameters.
 */
app.get('/get_intents', allIntents);


module.exports = app
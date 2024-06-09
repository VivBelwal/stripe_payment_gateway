# 🎉 Stripe Payment Gateway Integration Project

## Project Overview 🚀
Welcome to the Stripe Payment Gateway Integration adventure! This project is all about crafting backend APIs that seamlessly integrate with Stripe. Your mission, should you choose to accept it, is to create, capture, and manage payment intents, as well as process refunds. Get ready to dive into the Stripe sandbox and grab those magic API keys!

## Stripe Account Setup 🛠️
1. **Register for a Stripe account:** [Stripe Dashboard](https://dashboard.stripe.com/register)
2. **Retrieve your Stripe API keys** from the Stripe Dashboard. These keys are your gateway to Stripe wizardry!

## API Endpoints 🌐

### 1. Create Payment Intent 💰
**Endpoint:** `POST /api/v1/create_intent`

**Description:**  
Summon a new payment intent using the Stripe API.

### 2. Capture Payment Intent 🏹
**Endpoint:** `POST /api/v1/capture_intent/:id`

**Description:**  
Capture the essence of an existing payment intent by its ID.

### 3. Create Refund 💸
**Endpoint:** `POST /api/v1/create_refund/:id`

**Description:**  
Conjure a refund for an existing payment intent by its ID.

### 4. List Payment Intents 📜
**Endpoint:** `GET /api/v1/get_intents`

**Description:**  
Reveal the list of all payment intents.

## Final Deliverable 📦
Deliver the code that brings these APIs to life! Ensure your implementation is in perfect harmony with the Stripe API and covers all the magical operations as specified.

## Example Environment Configuration 🔧
Create a `.env` file in the root directory with the following enchanted content:
```env
PUBLIC_KEY=your-stripe-public-key
SECRET_KEY=your-stripe-secret-key
PORT=8000  # Set your desired port
```
## Usage

### Run the Application:
```bash
npm run server
```

## Deployed Link
[]()
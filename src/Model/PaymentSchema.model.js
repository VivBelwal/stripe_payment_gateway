const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    intendId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },

  customerID: {
    type: String,
  },
 
  userEmail: {
    type: String,
  },
  description: {
    type: String,
  },
  
  
}, {
  timestamps: true 
});

const Payment = mongoose.model('paymentDetails', paymentSchema);

module.exports = Payment;

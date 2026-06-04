const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  customerName: String,

  amount: Number,

  status: {
    type: String,
    default: "Pending"
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Billing", billingSchema);
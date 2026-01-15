const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items: {
    type: Array,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  deliveryAddress: {
    type: Object,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", OrderSchema);

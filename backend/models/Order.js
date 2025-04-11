const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  fabricType: String,
  name: String,
  price: String,
  image: String,
  quantity: Number,
  customizationNotes: String,
  referenceImageUrl: String,
});

const OrderSchema = new mongoose.Schema({
  clientName: String,
  address: String,
  phone: String,
  items: [ItemSchema],
});

module.exports = mongoose.model("Order", OrderSchema);

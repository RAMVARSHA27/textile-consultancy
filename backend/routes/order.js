const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// POST /api/orders
router.post("/", async (req, res) => {
  try {
    console.log("Received order:", req.body);
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ message: "Order placement failed" });
  }
});

module.exports = router;

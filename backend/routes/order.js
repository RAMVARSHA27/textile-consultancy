const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// POST /api/orders --> Place a new order
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

// GET /api/orders/dashboard-summary --> Admin dashboard data
router.get("/dashboard-summary", async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const pendingOrders = await Order.countDocuments({ status: "Pending" });
    const completedOrders = await Order.countDocuments({ status: "Completed" });
    const cancelledOrders = await Order.countDocuments({ status: "Cancelled" });

    const monthlyOrders = await Order.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          total: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.json({
      totalOrders,
      pendingOrders,
      completedOrders,
      cancelledOrders,
      monthlyOrders,
    });
  } catch (err) {
    console.error("Error fetching dashboard summary:", err);
    res.status(500).json({ message: "Fetching dashboard summary failed" });
  }
});

module.exports = router;

// const router = require("express").Router();
// const Order = require("../models/Order");

// // SAVE ORDER
// router.post("/", async (req, res) => {
//   try {
//     console.log("Incoming order:", req.body); // 👈 DEBUG
//     const order = new Order(req.body);
//     await order.save();
//     res.json({ success: true, message: "Order saved" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false });
//   }
// });

// // FETCH ORDERS (TESTING)
// router.get("/", async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch orders" });
//   }
// });

// module.exports = router;
const router = require("express").Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  try {
    console.log("🔥 ORDER API HIT");
    console.log("📦 Request body:", req.body);

    const order = new Order(req.body);
    await order.save();

    console.log("✅ Order saved to DB");

    res.json({ success: true, message: "Order saved" });
  } catch (err) {
    console.error("❌ Error saving order:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;

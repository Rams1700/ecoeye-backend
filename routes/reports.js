const router = require("express").Router();
const Report = require("../models/Report");

router.post("/", async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.json({ success: true, message: "Report saved" });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;

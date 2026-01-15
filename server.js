const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();

// 🔥 ALLOW ALL ORIGINS (SAFE FOR COLLEGE PROJECT)
app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// 🔥 Explicit preflight support
app.options("*", cors());

app.use(express.json());

app.use("/api/orders", require("./routes/orders"));
app.use("/api/reports", require("./routes/reports"));
app.use("/api/contact", require("./routes/contact"));

app.get("/", (req, res) => {
  res.send("EcoEye backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

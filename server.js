const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();

// ✅ FIXED CORS (Vercel + Render)
app.use(cors({
  origin: "https://ecoeye-frontend.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// ✅ Handle preflight explicitly
app.options("*", cors());

app.use(express.json());

app.use("/api/orders", require("./routes/orders"));
app.use("/api/reports", require("./routes/reports"));
app.use("/api/contact", require("./routes/contact"));

// health check
app.get("/", (req, res) => {
  res.send("EcoEye backend is running 🚀");
});

// ❗ Render PORT fix
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

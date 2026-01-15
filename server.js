const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();

/* ✅ CORS FIX (VERY IMPORTANT) */
app.use(
  cors({
    origin: "https://ecoeye-frontend.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

/* ✅ API ROUTES */
app.use("/api/orders", require("./routes/orders"));
app.use("/api/reports", require("./routes/reports"));
app.use("/api/contact", require("./routes/contact"));

/* ✅ HEALTH CHECK ROUTE (IMPORTANT FOR TESTING) */
app.get("/", (req, res) => {
  res.send("EcoEye backend is running 🚀");
});

/* ✅ PORT FIX (CRITICAL FOR RENDER) */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

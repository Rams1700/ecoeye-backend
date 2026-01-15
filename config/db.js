const mongoose = require("mongoose");

require("dotenv").config(); // Loads .env in local environment

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("❌ ERROR: MONGO_URI is missing. Add it in Render Environment.");
  process.exit(1);
}

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

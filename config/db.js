const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mantriramithacs24_db_user:ecoeye123@cluster0.ns6ml0d.mongodb.net/ecoeye"
  )
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.error("MongoDB connection error:", err));

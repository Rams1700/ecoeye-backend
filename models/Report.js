const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  location: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Report", ReportSchema);

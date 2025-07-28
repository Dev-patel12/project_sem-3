const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String }, // stores file path
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Complaint", complaintSchema);

const Complaint = require("../models/Complaint");

exports.submitComplaint = async (req, res) => {
  try {
    console.log("✅ Complaint submission hit");

    const { subject, category, description } = req.body;
    const file = req.file ? req.file.filename : null;

    const complaint = new Complaint({ subject, category, description, file });
    await complaint.save();

    console.log("✅ Complaint saved:", complaint);
    res.status(201).json({ message: "Complaint submitted successfully!" });
  } catch (error) {
    console.error("❌ Error submitting complaint:", error);
    res.status(500).json({ message: "Server error" });
  }
};


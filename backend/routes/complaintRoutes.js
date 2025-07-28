const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { submitComplaint } = require("../controllers/complaintController");

// File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.post("/submit", upload.single("file"), submitComplaint);

module.exports = router;

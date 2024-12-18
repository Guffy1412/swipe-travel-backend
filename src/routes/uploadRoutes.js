const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Configure storage for uploaded images
const storage = multer.diskStorage({
  destination: "./images", // Save images to 'uploads' folder
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Route: Upload an image
router.post("/upload", upload.single("image"), (req, res) => {
  console.log("test")
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Respond with the image URL
  const imageUrl = `${req.protocol}://${req.get("host")}/upload/${req.file.filename}`;
  res.json({ imageUrl });
});


module.exports = router;
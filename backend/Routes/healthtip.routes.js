const express = require("express");
const router = express.Router();
const healthTipController = require("../Controllers/healthtip.controller");
const authMiddleware = require("../Middlewares/auth.middleware");
const multer = require("multer");
const path = require("path");

// Setup Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images"); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Route to create a new health tip
router.post(
  "/api/health-tips",
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // Ensure only admin users can create health tips
  upload.single('image'), // Handle image upload
  healthTipController.createHealthTip
);

// Route to fetch all health tips
router.get(
  "/api/health-tips",
  [authMiddleware.verifyToken], // Optional: you can add more middleware for access control
  healthTipController.getAllHealthTips
);

// Route to fetch a single health tip by ID
router.get(
  "/api/health-tips/:id",
  [authMiddleware.verifyToken], // Optional: you can add more middleware for access control
  healthTipController.getHealthTipById
);

// Route to update a health tip by ID
router.put(
  "/api/health-tips/:id",
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // Ensure only admin users can update health tips
  upload.single('image'), // Handle image upload
  healthTipController.updateHealthTip
);

// Route to delete a health tip by ID
router.delete(
  "/api/health-tips/:id",
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // Ensure only admin users can delete health tips
  healthTipController.deleteHealthTip
);

module.exports = router;

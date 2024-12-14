const express = require("express");
const router = express.Router();
const healthTipController = require("../Controllers/healthtip.controller");
const authMiddleware = require("../Middlewares/auth.middleware");
const multer = require("multer");
const path = require("path");

// Setup Multer for file upload
// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder =
      file.fieldname === "health_tip_image" ? "uploads/news" : "uploads";
    // Ensure the folder exists, create it if not
    const dir = path.join(__dirname, `../${folder}`);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  // uniqueName
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`;
    cb(null, uniqueName);
  },

  // filename: (req, file, cb) => {
  //   cb(null, file.originalname);
  // },
});

const upload = multer({ storage });

// Route to create a new health tip
router.post(
  "/api/health-tips",
  upload.fields([{ name: "health_tip_image", maxCount: 1 }]), // Handle image upload
  healthTipController.createHealthTip
);

// Route to fetch all health tips
router.get(
  "/api/health-tips",
  healthTipController.getAllHealthTips
);

// Route to fetch a single health tip by ID
router.get(
  "/api/health-tips/:id",
  healthTipController.getHealthTipById
);

// Route to update a health tip by ID
router.put(
  "/api/health-tips/:id",
  upload.single('image'), // Handle image upload
  healthTipController.updateHealthTip
);

// Route to delete a health tip by ID
router.delete(
  "/api/health-tips/:id",
  healthTipController.deleteHealthTip
);

module.exports = router;

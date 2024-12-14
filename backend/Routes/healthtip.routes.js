const express = require("express");
const multer = require("multer");
const authMiddleware = require("../Middlewares/auth.middleware");
const healthTipController = require("../Controllers/healthtip.controller");
const fs = require("fs");
const path = require("path");


// Initialize router
const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Folder destination based on the field name 'health_tip_image'
    const folder =
      file.fieldname === "health_tip_image" ? "uploads/healthtips" : "uploads";


    // Ensure the folder exists, create it if not
    const dir = path.join(__dirname, `../${folder}`);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir); // specify where to store the file
  },

  // Unique filename for the uploaded files
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`; // Adding timestamp to the filename for uniqueness
    cb(null, uniqueName); // use unique filename

  },

  // filename: (req, file, cb) => {
  //   cb(null, file.originalname);
  // },
});

const upload = multer({ storage });

// Route to create a health tip
router.post(

  "/api/healthtips", // Corrected route path
  upload.fields([{ name: "health_tip_image", maxCount: 1 }]), // Field name 'health_tip_image' as is
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // Authentication/authorization middleware
  healthTipController.createHealthTip // Controller action to create a health tip

);

// Route to get a single health tip by ID
router.get(

  "/api/healthtips/:id",
  // [authMiddleware.verifyToken],
  healthTipController.getHealthTipById
);

// Route to get all health tips
router.get(

  "/api/healthtips",
  // [authMiddleware.verifyToken],
  healthTipController.getAllHealthTips
);

// Route to update an existing health tip
router.put(

  "/api/healthtips/:id", // Corrected route path
  upload.fields([{ name: "health_tip_image", maxCount: 1 }]), // Field name 'health_tip_image' as is
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // Authentication/authorization middleware
  healthTipController.updateHealthTip // Controller action to update a health tip
);

// Route to delete a health tip
router.delete(

  "/api/healthtips/:id", // Corrected route path
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // Authentication/authorization middleware
  healthTipController.deleteHealthTip // Controller action to delete a health tip
);

// Export the router to be used in the main application
module.exports = router;

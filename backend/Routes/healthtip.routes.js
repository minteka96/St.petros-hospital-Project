// Import the express module
const express = require("express");
const router = express.Router();

// Import the health tip controller
const healthTipController = require("../Controllers/healthtip.controller");

// Define routes related to health tips

// Route to create a new health tip
router.post("/health-tips", healthTipController.createHealthTip);

// Route to fetch a single health tip by ID
router.get("/health-tips:id", healthTipController.getHealthTipById);

// Route to fetch all health tips
router.get("/health-tips", healthTipController.getAllHealthTips);

// Route to update a health tip by ID
router.put("/health-tips:id", healthTipController.updateHealthTip);

// Route to delete a health tip by ID
router.delete("/health-tips:id", healthTipController.deleteHealthTip);

// Export the health tip routes
module.exports = router;
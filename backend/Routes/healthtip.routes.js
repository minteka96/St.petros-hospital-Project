// Import the express module
const express = require("express");
const router = express.Router();

// Import the health tip controller
const healthTipController = require("../Controllers/healthtip.controller");

// Define routes related to health tips

// Route to create a new health tip
router.post("/", healthTipController.createHealthTip);

// Route to fetch a single health tip by ID
router.get("/:id", healthTipController.getHealthTipById);

// Route to fetch all health tips
router.get("/", healthTipController.getAllHealthTips);

// Route to update a health tip by ID
router.put("/:id", healthTipController.updateHealthTip);

// Route to delete a health tip by ID
router.delete("/:id", healthTipController.deleteHealthTip);

// Export the health tip routes
module.exports = router;

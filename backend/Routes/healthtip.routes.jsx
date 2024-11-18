// Importing the Express framework to handle routing and HTTP requests
const express = require("express");

// Creating a new router instance to define routes for the healthTip API
const router = express.Router();

// Importing the healthTip controller that handles the business logic for the healthTip API routes
const healthTipController = require("../Controllers/healthTip.controller.js");

// Importing authentication middleware to secure certain routes (though not used here)
const authenticate = require("../Middlewares/auth.middleware.jsx");

/**
 * This route allows the creation of a new healthTip. The request body must contain
 * the necessary data such as healthTip title, description, and links.
 */
router.post("/health-tips", healthTipController.createHealthTip);

/**
 * This route fetches a single healthTip entry by its unique ID from the database.
 * The healthTip ID is passed as a parameter in the URL.
 */
router.get("/health-tips/:id", healthTipController.getHealthTipById);

/**
 * This route fetches all the healthTip entries stored in the database.
 * It returns a list of all health tips.
 */
router.get("/health-tips", healthTipController.getAllHealthTips);

/**
 * This route allows updating a specific healthTip entry identified by its ID.
 * The updated data should be provided in the request body.
 */
// router.put("/health-tips/{health_tip_id}", healthTipController.updateHealthTip);

/**
 * This route deletes a specific healthTip entry based on the healthTip ID provided in the URL.
 */
router.delete("/health-tips/:id}", healthTipController.deleteHealthTip);

// Exporting the router to be used in the main application file
module.exports = router;

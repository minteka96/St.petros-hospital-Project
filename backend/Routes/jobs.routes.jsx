const express = require("express");

// Create a router instance
const router = express.Router();

// Import the jobs controller
const jobsController = require("../Controllers/jobs.controller");

// Define a route to add jobs
router.post(
  "/api/vacancies",
  // Uncomment the following line to enable authentication middleware
  // [authMiddleware.verifyToken, authMiddleware.isAdmin],
  jobsController.createJob
);

// Export the router
module.exports = router;

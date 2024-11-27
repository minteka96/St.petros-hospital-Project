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
// Define a route to get all jobs
router.get("/api/vacancies", jobsController.getAllJobs);

// Define a route to get a job by ID
router.get("/api/vacancies/:id", jobsController.getJobById);
// Define a route to delete a job
router.delete("/api/vacancies/:id", jobsController.deleteJob);
// Export the router
module.exports = router;

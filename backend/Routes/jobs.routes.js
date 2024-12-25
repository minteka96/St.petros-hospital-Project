const express = require("express");
const authMiddleware = require("../Middlewares/auth.middleware");

// Create a router instance
const router = express.Router();

// Import the jobs controller
const jobsController = require("../Controllers/jobs.controller");

// Define a route to add jobs
router.post(
  "/api/vacancies",
  // Uncomment the following line to enable authentication middleware
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "HR"]),
  ],
  jobsController.createJob
);

// Define a route to get all jobs
router.get("/api/vacancies", jobsController.getAllJobs);

// Define a route to get a job by ID
router.get("/api/vacancies/:id", jobsController.getJobById);

router.put("/api/vacancies/:jobId", jobsController.updateStatus);

// Define a route to delete a job
router.delete(
  "/api/vacancies/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "HR"]),
  ],
  jobsController.deleteJob
);

// Export the router
module.exports = router;

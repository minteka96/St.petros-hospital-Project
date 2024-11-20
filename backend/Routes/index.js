// Import the express module
const express = require("express");
const router = express.Router();

// Import individual route files
const installRouter = require("./install.routes"); // Correct path
const jobsRouter = require("./jobs.routes"); // Correct path
const newsRoutes = require("./news.routes"); // Correct path
const healthTipRoutes = require("./healthtip.routes"); // Import the new health tip routes

// Add the install routes under /install
router.use("/install", installRouter);

// Add the jobs routes under /jobs
router.use("/jobs", jobsRouter);

// Add the news routes under /news
router.use("/news", newsRoutes);

// Add the health tip routes under /health-tips
router.use("/health-tips", healthTipRoutes); // This will be the base path for health tip routes

// Export the combined router
module.exports = router;

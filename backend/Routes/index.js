// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
const installRouter = require("./install.routes");
// Import the jobs router
const jobsRouter = require("./jobs.routes.jsx");
// Import the video router
const videoRoutes = require("./video_embed.routes.js");
// Add the install router to the main router
router.use(installRouter);
// Add the jobs router to the main router
router.use(jobsRouter);
// Import the news router
const newsRoutes = require("./news.routes.jsx");
// Add the news routes to the main router
router.use(newsRoutes);
// Import the video router
router.use(videoRoutes);

// Export the router
module.exports = router;

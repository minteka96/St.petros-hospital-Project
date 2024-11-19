const express = require("express");
const router = express.Router();
const videoController = require("../Controllers/video_emdeds.controller.js");
// const authenticate = require("../Middlewares/auth.middleware.jsx");

// Define a route to get all jobs
router.get("/api/videos", videoController.getAllVideos);

// Define a route to get a job by ID
router.get("/api/video/:id", videoController.getVideoById);

router.put("/api/video/", videoController.updateVideo);

module.exports = router;

const express = require("express");
// const multer = require("multer");
const authMiddleware = require("../Middlewares/auth.middleware");
const videoController = require("../Controllers/videos.controller.js");
// const fs = require("fs");
// const path = require("path");

// Initialize router
const router = express.Router();

// Configure multer storage for video uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const folder =
//       file.fieldname === "video_file" ? "uploads/videos" : "uploads";
//     // Ensure the folder exists, create it if not
//     const dir = path.join(__dirname, `../${folder}`);
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir, { recursive: true });
//     }
//     cb(null, dir);
//   },
//   // Generate unique filename
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}_${file.originalname}`;
//     cb(null, uniqueName);
//   },
// });

// // Initialize multer upload
// const upload = multer({
//   storage,
//   limits: { fileSize: 50 * 1024 * 1024 }, // Limit video file size to 50MB
// });

// Route to create a video embed entry
// router.post(
//   "/api/videos",
//   upload.fields([{ name: "video_file", maxCount: 1 }]),
//   [
//     authMiddleware.verifyToken,
//     authMiddleware.checkRoles(["superadmin", "Admin", "Comm"]),
//   ],
//   videoController.createVideoEmbed
// );

// Route to get a single video by ID
router.get("/api/videos/:id", videoController.getVideoById);

// Route to get all videos
router.get("/api/videos", videoController.getAllVideos);

// Route to update a video entry
router.put(
  "/api/videos/:videoId",
  // upload.fields([{ name: "video_file", maxCount: 1 }]),
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "Comm"]),
  ],
  videoController.updateVideoEmbed
);

// Route to delete a video entry
// router.delete(
//   "/api/videos/:videoId",
//   [
//     authMiddleware.verifyToken,
//     authMiddleware.checkRoles(["superadmin", "Admin"]),
//   ],
//   videoController.deleteVideoEmbed
// );

module.exports = router;

const express = require("express");
const multer = require("multer");
const authMiddleware = require("../Middlewares/auth.middleware");
const newsController = require("../Controllers/news.controller");
const fs = require("fs");
const path = require("path");

// Initialize router
const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = "uploads/news";
    const dir = path.join(__dirname, `../${folder}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Apply middleware for file uploads
router.post(
  "/api/news",
  upload.array("news_image", 100),
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "Communication"]),
  ],
  newsController.createNews
);

// Route to fetch a single news entry by ID
router.get("/api/news/:id", newsController.getNewsById);

// Route to fetch all news entries
router.get("/api/news", newsController.getAllNews);

// Route to update a news entry
router.put(
  "/api/news/:id",
  upload.array("news_image", 100),
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "Communication"]),
  ],
  newsController.updateNews
);


// Route to delete a news entry
router.delete(
  "/api/news/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "Communication"]),
  ],
  newsController.deleteNews
);

// Exporting the router to be used in the main application file
module.exports = router;

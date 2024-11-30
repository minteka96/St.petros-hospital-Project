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
    const folder = file.fieldname === "news_image" ? "uploads/news" : "uploads";
    // Ensure the folder exists, create it if not
    const dir = path.join(__dirname, `../${folder}`);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  // uniqueName
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`;
    cb(null, uniqueName);
  },

  // filename: (req, file, cb) => {
  //   cb(null, file.originalname);
  // },
});

const upload = multer({ storage });

// Route to create a news entry
router.post(
  "/api/news", // Added leading slash
  upload.fields([{ name: "news_image", maxCount: 1 }]), // Corrected field name
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // authentication/authorization
  newsController.createNews
);

router.get("/api/news/:id", newsController.getNewsById);
router.get("/api/news", newsController.getAllNews);

router.put(
  "/api/news/:id",
  upload.fields([{ name: "news_image", maxCount: 1 }]),
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // authentication/authorization
  newsController.updateNews
);

router.delete(
  "/api/news/:id",
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // authentication/authorization
  newsController.deleteNews
);
// Exporting the router to be used in the main application file

module.exports = router;

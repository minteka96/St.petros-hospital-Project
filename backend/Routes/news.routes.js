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
  "/api/news",
  upload.fields([{ name: "news_image", maxCount: 1 }]), // multer middleware
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // authentication/authorization
  newsController.createNews // controller
);

router.get(
  "/api/news",
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // authentication/authorization only
  newsController.getAllNews
);

router.get(
  "/api/news/:id",
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // authentication/authorization only
  newsController.getNewsById
);

router.put(
  "/api/news/:id",
  upload.fields([{ name: "news_image", maxCount: 1 }]), // multer middleware
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // authentication/authorization
  newsController.updateNews // controller
);

router.delete(
  "/api/news/:id",
  [authMiddleware.verifyToken, authMiddleware.isAdmin], // authentication/authorization only
  newsController.deleteNews
);
// Exporting the router to be used in the main application file

module.exports = router;

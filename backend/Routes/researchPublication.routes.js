const express = require("express");
const multer = require("multer");
const authMiddleware = require("../Middlewares/auth.middleware");
const { getPublications, createPublication, updatePublication, deletePublication } = require("../Controllers/researchPublication.controller");
const fs = require("fs");
const path = require("path");

// Initialize router
const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = file.fieldname === "file" ? "uploads/research-publications" : "uploads";
    // Ensure the folder exists, create it if not
    const dir = path.join(__dirname, `../${folder}`);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  // Unique filename
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// Routes for research publications
router.get("/research-publications", getPublications);

router.post(
  "/research-publications",
  upload.single("file"), // Single file upload for "file" field
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "RPUB"]),
  ],
  createPublication
);

router.put(
  "/research-publications/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "RPUB"]),
  ],
  updatePublication
);

router.delete(
  "/research-publications/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "RPUB"]),
  ],
  deletePublication
);

module.exports = router;

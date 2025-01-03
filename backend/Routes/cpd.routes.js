const express = require("express");
const multer = require("multer");
const router = express.Router();
const cpdController = require("../Controllers/cpd.controller");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder =
      file.fieldname === "pri_test"
        ? "uploads/cpd/pri_test"
        : "uploads/cpd/post_test";
    cb(null, folder);
  },
  // uniqueName
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`;
    cb(null, uniqueName);
  },

  // originalName
  // filename: (req, file, cb) => {
  //   cb(null, file.originalname);
  // },
});

const upload = multer({ storage });

// Route for creating an cpd course with file uploads
router.post(
  "/api/cpd/course",
  upload.fields([
    { name: "pri_test", maxCount: 1 },
    { name: "post_test", maxCount: 1 },
  ]),
  (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: "File upload failed" });
    }
    next();
  },
  cpdController.createCpdCourse
);

// Route for updating a specific cpd course by ID
router.put(
  "/api/cpd/course/:id",
  upload.fields([
    { name: "pri_test", maxCount: 1 },
    { name: "post_test", maxCount: 1 },
  ]),
  (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: "File upload failed" });
    }
    next();
  },
  cpdController.updateCpdCourse
);

// Route for getting all cpd courses
router.get("/api/cpd/courses", cpdController.getAllCpdCourses);

// Route for getting a specific cpd course by ID
router.get("/api/cpd/course/:id", cpdController.getCpdCourseById);

// Route for deleting a specific cpd course by ID
router.delete("/api/cpd/course/:id", cpdController.deleteCpdCourse);

module.exports = router;

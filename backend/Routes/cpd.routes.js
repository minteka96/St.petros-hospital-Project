const express = require("express");
const multer = require("multer");
const router = express.Router();
const cpdController = require("../Controllers/cpd.controller");
const { route } = require("./applicant.routes");
const authMiddleware = require("../Middlewares/auth.middleware");

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
  [
    authMiddleware.verifyToken,

    authMiddleware.checkRoles(["superadmin", "Admin", "CPD"]),
  ],
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
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "CPD"]),
  ],
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
router.get(
  "/api/cpd/courses",
  [
    authMiddleware.verifyBothTokens,
    authMiddleware.checkRoles(["superadmin", "Admin", "CPD"]),
  ],
  cpdController.getAllCpdCourses
);
router.get(
  "/api/cpd/available/courses",
  [
    authMiddleware.verifyBothTokens,

    // authMiddleware.checkRoles(["superadmin", "Admin", "CPD"]),
  ],
  cpdController.getAvailableCpdCourses
);

//  `http://localhost:3001/api/cpd/available/courses?trainee_id=${traineeId}`

router.get(
  "/api/cpd/IsApply/:trainee_id",
  [
    authMiddleware.verifyBothTokens,
    authMiddleware.checkRoles(["superadmin", "Admin", "CPD"]),
  ],
  cpdController.IsApply
);

// Route for getting a specific cpd course by ID
router.get("/api/cpd/course/:id", cpdController.getCpdCourseById);
router.get("/api/cpd/trainings/:course_name", cpdController.getCpdCourseByName);

router.post("/api/cpd/apply", cpdController.apply);

//Route to update course(pri_score, post_score) by trainee_id and course_name
router.put(
  "/api/cpdResult/update/:trainee_id/:course_name",
  [
    authMiddleware.verifyBothTokens ,
    authMiddleware.checkRoles(["superadmin", "Admin", "CPD"]),
  ],
  cpdController.updateTestResult
);

// Route for deleting a specific cpd course by ID
router.delete(
  "/api/cpd/course/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "CPD"]),
  ],
  cpdController.deleteCpdCourse
);

module.exports = router;

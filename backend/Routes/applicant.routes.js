const express = require("express");
const multer = require("multer");
const router = express.Router();
const ApplicantController = require("../Controllers/applicant.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder =
      file.fieldname === "cv_file" ? "uploads/cv" : "uploads/testimonials";
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

// Route for creating an applicant with file uploads
router.post(
  "/api/applicant",
  upload.fields([
    { name: "cv_file", maxCount: 1 },
    { name: "testimonials", maxCount: 1 },
  ]),
  ApplicantController.createApplicant
);

router.get(
  "/api/applicants",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "HR"]),
  ],
  ApplicantController.getAllApplicants
);
router.get(
  "/api/applicant/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "HR"]),
  ],
  ApplicantController.getApplicantById
);
// router.put("/api/applicant/:id", ApplicantController.updateApplicant);
router.delete(
  "/api/applicant/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "HR"]),
  ],
  ApplicantController.deleteApplicant
);
router.delete(
  "/api/applicants/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "HR"]),
  ],
  ApplicantController.deleteApplicant
);
router.delete(
  "/api/applicants",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin", "HR"]),
  ],
  ApplicantController.deleteAllApplicants
);

module.exports = router;

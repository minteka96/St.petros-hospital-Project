const express = require("express");
const router = express.Router();
const TrainCourseStatusController = require("../Controllers/trainCourseStatus.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

router.get("/api/training-data", authMiddleware.verifyToken, TrainCourseStatusController.getAllTrainingData);
router.get("/api/training-data/:id", authMiddleware.verifyToken, TrainCourseStatusController.getTrainingDataById);

module.exports = router;

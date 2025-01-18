const express = require("express");
const router = express.Router();
const TraineesInfoController = require("../Controllers/trainees_info.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

router.post(
  "/api/trainees-info",

  TraineesInfoController.createTraineeInfo
);

router.get(
  "/api/trainees-info",

  TraineesInfoController.getAllTraineesInfo
);

router.get("/api/trainees-info/:id", TraineesInfoController.getTraineeInfoById);
router.get(
  "/api/trainee-info/:traineeId",
  TraineesInfoController.getTraineeInfoByTraineeId
);

router.put(
  "/api/trainees-info/:id",

  TraineesInfoController.updateTraineeInfo
);

router.delete(
  "/api/trainees-info/:id",

  TraineesInfoController.deleteTraineeInfo
);

module.exports = router;

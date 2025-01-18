// getTraineesByScheduleId;
const express = require("express");
const router = express.Router();
const traineeController = require("../Controllers/trainee.controller");

router.get(
 "/api/trainees/:schedule_id",
 traineeController.getTraineesByScheduleId
);

router.get(
  "/api/trainee/status/:trainee_id/:course_name",
  traineeController.getTraineesStatus
)

router.put(
  "/api/trainee/status/:trainee_id/:course_name",
  traineeController.updateTraineesStatus
)


module.exports = router;

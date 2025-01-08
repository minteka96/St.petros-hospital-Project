// getTraineesByScheduleId;
const express = require("express");
const router = express.Router();
const traineeController = require("../Controllers/trainee.controller");

router.get(
 "/api/trainees/:schedule_id",
 traineeController.getTraineesByScheduleId
);

module.exports = router;
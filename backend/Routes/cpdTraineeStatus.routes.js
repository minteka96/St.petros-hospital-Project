const express = require("express");
const router = express.Router();
const cpdScheduleController = require("../Controllers/cpdSchedule.controller");

// Router to create a new schedule
router.post(
  "/api/cpd/schedule/:training_id",
  cpdScheduleController.createSchedule
);

// Router to get all schedules
router.get("/api/cpd/schedule", cpdScheduleController.getAllSchedules);

// Router to get a specific schedule by id
router.get("/api/cpd/schedule/:id", cpdScheduleController.getScheduleById);

// Router to update a specific schedule by id
router.put("/api/cpd/schedule/:id", cpdScheduleController.updateScheduleById);

// Router to delete a specific schedule by id
router.delete("/api/cpd/schedule/:id", cpdScheduleController.deleteScheduleById);

module.exports = router;
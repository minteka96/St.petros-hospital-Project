const cpdScheduleService = require("../Services/cpdSchedule.service");

// create a new cpd schedule
async function createSchedule(req, res) {
  const { training_id } = req.params;
  try {
    const {
      course_name,
      registration_start_date,
      registration_end_date,
      course_start_date,
      course_end_date,
    } = req.body;
    if (
      !course_name ||
      !registration_start_date ||
      !registration_end_date ||
      !course_start_date ||
      !course_end_date
    )
      return res.status(400).json({ error: "All fields are required" });
    const schedule = await cpdScheduleService.createSchedule(
      req.body,
      training_id
    );
    if (!schedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(201).json({message: "Schedule created successfully", status: 201});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all CPD schedules
async function getAllSchedules(req, res) {
  try {
    // Update registration status for all schedules
    await cpdScheduleService.updateAllRegistrationStatuses();

    // Fetch updated schedules
    const schedules = await cpdScheduleService.getAllSchedules();

    if (!schedules || schedules.length === 0) {
      return res.status(404).json({ error: "Schedules not found" });
    }

    // Return the updated schedules
    res.status(200).json(schedules);
  } catch (error) {
    console.error("Error fetching schedules:", error);
    res.status(400).json({ error: error.message });
  }
}


// get a specific cpd schedule by id
async function getScheduleById(req, res) {
  const { id } = req.params;
  try {
    await cpdScheduleService.updateAllRegistrationStatuses();
    const schedule = await cpdScheduleService.getScheduleById(id);
    if (!schedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json(schedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// update a specific cpd schedule by id
async function updateScheduleById(req, res) {
  const { id } = req.params;
  try {
    const schedule = await cpdScheduleService.updateScheduleById(id, req.body);
    if (!schedule.affectedRows) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json({ message: "Schedule updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// delete a specific cpd schedule by id
async function deleteScheduleById(req, res) {
  const { id } = req.params;
  try {
    const schedule = await cpdScheduleService.deleteScheduleById(id);
    if (!schedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json({ message: "Schedule deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = { createSchedule, getAllSchedules, getScheduleById, updateScheduleById, deleteScheduleById };

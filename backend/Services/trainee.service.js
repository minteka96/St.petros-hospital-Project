const db = require("../Config/db.config");

// Function to get all trainees
const getAllTrainees = async () => {
 try {
  const result = await db.query(`SELECT * FROM trainees_info`);
  return result;
 } catch (err) {
  throw new Error("Error fetching trainees: " + err.message);
 }
};

// Function to get trainees by schedule id first find trainee_id from courses table and then from trainees_info table
const getTraineesByScheduleId = async (scheduleId) => {
  try {
    const query = `
      SELECT ti.*
      FROM trainees_info ti
      JOIN courses c ON ti.trainee_id = c.trainee_id
      WHERE c.schedule_id = ?;
    `;
    const trainees = await db.query(query, [scheduleId]);
    console.log("trainees", trainees);
    return trainees;
  } catch (err) {
    throw new Error("Error fetching trainees by schedule ID: " + err.message);
  }
};

module.exports = {
  getAllTrainees,
  getTraineesByScheduleId,
};
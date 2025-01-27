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
    return trainees;
  } catch (err) {
    throw new Error("Error fetching trainees by schedule ID: " + err.message);
  }
};

//function to get trainees_status by trainee id and course_name
const getTraineesStatus = async (traineeId, course_name) => {
  try {
    const query = `SELECT * FROM trainees_status WHERE trainee_id = ? AND course_name = ?;`;
    const trainees = await db.query(query, [traineeId, course_name]);
    return trainees;
  } catch (err) {
    throw new Error("Error fetching trainees by schedule ID: " + err.message);
  }
};

const updateTraineesStatus = async (traineeId, courseName, status) => {
  try {
    // Destructure status and replace undefined with null
    const pri_test = status.pri_test !== undefined ? status.pri_test : null;
    const post_test = status.post_test !== undefined ? status.post_test : null;
    const certificate =
      status.certificate !== undefined ? status.certificate : null;

    // Construct the query
    const query = `
      UPDATE trainees_status 
      SET 
        pri_test = ?, 
        post_test = ?, 
        certificate = ? 
      WHERE 
        trainee_id = ? AND 
        course_name = ?;
    `;

    // Execute the query with validated parameters
    const result = await db.query(query, [
      pri_test,
      post_test,
      certificate,
      traineeId,
      courseName,
    ]);

    return getTraineesStatus(traineeId, courseName);
  } catch (err) {
    throw new Error("Error updating trainee status: " + err.message);
  }
};

// Export the functions
module.exports = {
  getAllTrainees,
  getTraineesByScheduleId,
  getTraineesStatus,
  updateTraineesStatus,
};

const conn = require("../Config/db.config");

//create cpd schedule
async function createSchedule(data, training_id) {
  const sql =
    "INSERT INTO training_schedule (training_id, course_name, registration_start_date, registration_end_date, course_start_date, course_end_date) VALUES (?, ?, ?, ?, ?, ?)";
  
    const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [
      training_id,
      data.course_name,
      data.registration_start_date,
      data.registration_end_date,
      data.course_start_date,
      data.course_end_date,
    ]);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

//get cpd schedule by id
async function getScheduleById(id) {
  const sql = "SELECT * FROM training_schedule WHERE training_id = ?";
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql, [id]);
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

//get all cpd schedules
async function getAllSchedules() {
  const sql = "SELECT * FROM training_schedule";
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

//update cpd schedule by id
async function updateScheduleById(id, data) {
  const sql =
    "UPDATE training_schedule SET course_name = ?, registration_start_date = ?, registration_end_date = ?, course_start_date = ?, course_end_date = ? WHERE schedule_id = ?";
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [
      data.course_name,
      data.registration_start_date,
      data.registration_end_date,
      data.course_start_date,
      data.course_end_date,
      id,
    ]);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
} 

async function deleteScheduleById(id) {
  const deleteCoursesSql = "DELETE FROM courses WHERE schedule_id = ?";
  const deleteScheduleSql =
    "DELETE FROM training_schedule WHERE schedule_id = ?";

  const connection = await conn.pool.getConnection();

  try {
    // Start the transaction
    await connection.beginTransaction();

    // Delete associated courses
    await connection.query(deleteCoursesSql, [id]);

    // Delete the schedule
    const [result] = await connection.query(deleteScheduleSql, [id]);

    // Commit the transaction
    await connection.commit();

    return result;
  } catch (error) {
    // Rollback the transaction on error
    await connection.rollback();
    throw new Error(
      "Error deleting schedule and associated courses: " + error.message
    );
  } finally {
    // Release the connection back to the pool
    await connection.release();
  }
}

// "UPDATE training_schedule SET registration_status = (NOW() > registration_end_date)";

//update registration status by itself
// Update registration status for all schedules
async function updateAllRegistrationStatuses() {
  const sql = `
    UPDATE training_schedule 
    SET registration_status = (NOW() > registration_end_date)
  `;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    console.error("Error updating registration statuses:", error);
    throw error;
  } finally {
    await connection.release();
  }
}





module.exports = {
  createSchedule,
  getScheduleById,
  getAllSchedules,
  updateScheduleById,
  deleteScheduleById,
  updateAllRegistrationStatuses,
};
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
    "UPDATE training_schedule SET course_name = ?, registration_start_date = ?, registration_end_date = ?, course_start_date = ?, course_end_date = ? WHERE training_id = ?";
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

//delete cpd schedule by id
async function deleteScheduleById(id) {
  const sql = "DELETE FROM training_schedule WHERE schedule_id = ?";
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [id]);
    await connection.commit();
    return result.affectedRows > 0;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

module.exports = { createSchedule, getScheduleById, getAllSchedules, updateScheduleById, deleteScheduleById };
const conn = require("../Config/db.config");
const { v4: uuidv4 } = require('uuid');

async function createTraineeInfo(data) {
  const sql = `INSERT INTO trainees_info (id, trainee_id, first_name, middle_name, last_name, sex, phone, profession, account_number) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [
      uuidv4(),
      data.trainee_id,
      data.first_name,
      data.middle_name,
      data.last_name,
      data.sex,
      data.phone,
      data.profession,
      data.account_number
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

async function getAllTraineesInfo() {
  const sql = `SELECT * FROM trainees_info`;
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

async function getTraineeInfoById(id) {
  const sql = `SELECT * FROM trainees_info WHERE id = ?`;
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

async function updateTraineeInfo(id, data) {
  const sql = `UPDATE trainees_info SET ? WHERE id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [data, id]);
    await connection.commit();
    if (result.affectedRows === 0) return null;
    return getTraineeInfoById(id);
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

async function deleteTraineeInfo(id) {
  const sql = `DELETE FROM trainees_info WHERE id = ?`;
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

module.exports = {
  createTraineeInfo,
  getAllTraineesInfo,
  getTraineeInfoById,
  updateTraineeInfo,
  deleteTraineeInfo
};

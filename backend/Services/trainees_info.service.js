const conn = require("../Config/db.config");
const { v4: uuidv4 } = require("uuid");

const createTraineeInfo = async (data) => {
  const connection = await conn.pool.getConnection();
  try {
    // Get the latest created trainee record
    const [latestTrainee] = await connection.query(
      "SELECT trainee_id FROM trainees ORDER BY created_at DESC LIMIT 1"
    );

    const traineeId = latestTrainee[0].trainee_id;

    // Create trainee info using the retrieved trainee_id
    const traineeInfoSql = `INSERT INTO trainees_info 
      (id, trainee_id, first_name, middle_name, last_name, sex, phone, profession, account_number)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const [result] = await connection.query(traineeInfoSql, [
      uuidv4(),
      traineeId, // Using the latest trainee_id
      data.first_name,
      data.middle_name,
      data.last_name,
      data.sex,
      data.phone,
      data.profession,
      data.account_number,
    ]);

    return result;
  } finally {
    connection.release();
  }
};

async function updateTraineeInfo(id, data) {
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();

    // Update trainees_info table
    const updateInfoQuery = `
      UPDATE trainees_info 
      SET first_name = ?,
          middle_name = ?,
          last_name = ?,
          sex = ?,
          phone = ?,
          profession = ?,
          account_number = ?
      WHERE id = ?
    `;

    await connection.query(updateInfoQuery, [
      data.first_name,
      data.middle_name || "",
      data.last_name,
      data.sex,
      data.phone,
      data.profession,
      data.account_number,
      id,
    ]);

    // Update email in trainees table
    const updateEmailQuery = `
      UPDATE trainees t
      JOIN trainees_info ti ON t.trainee_id = ti.trainee_id
      SET t.email = ?
      WHERE ti.id = ?
    `;

    const newEmail = `${data.first_name.toLowerCase()}.${data.last_name.toLowerCase()}@example.com`;
    await connection.query(updateEmailQuery, [newEmail, id]);

    await connection.commit();

    // Return updated data
    const [updatedData] = await connection.query(
      "SELECT * FROM trainees_info WHERE id = ?",
      [id]
    );
    return updatedData[0];
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

async function deleteTraineeInfo(id) {
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();

    // Delete from trainees_info table first
    const deleteTraineeInfoSql = `DELETE FROM trainees_info WHERE id = ?`;
    await connection.query(deleteTraineeInfoSql, [id]);

    // Then delete from trainees table
    const deleteTraineeSql = `DELETE FROM trainees WHERE trainee_id = (
  SELECT trainee_id FROM trainees_info WHERE id = ?
)`;
    await connection.query(deleteTraineeSql, [id]);

    await connection.commit();
    return true;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

async function getAllTraineesInfo() {
  const sql = `
    SELECT ti.*, t.email 
    FROM trainees_info ti 
    JOIN trainees t ON ti.trainee_id = t.trainee_id
  `;

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
  const sql = `SELECT * FROM trainees_info WHERE trainee_id = ?`;
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
async function getTraineeInfoByTraineeId(id) {
  const sql = `SELECT * FROM trainees_info WHERE trainee_id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    const rows = await connection.query(sql, [id]);
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

async function TraineeInfoById(id) {
  // Select all columns from trainees_status and specific columns from trainees_info
  const sql = `
    SELECT 
      ts.*, 
      ti.first_name, 
      ti.middle_name, 
      ti.last_name
    FROM 
      trainees_status ts
    JOIN 
      trainees_info ti
    ON 
      ts.trainee_id = ti.trainee_id
    WHERE 
      ts.trainee_id = ?;
  `;

  const connection = await conn.pool.getConnection();
  try {
    // Execute the query and fetch results
    const [rows] = await connection.query(sql, [id]);
    return rows.length > 0 ? rows[0] : null; // Return the first result or null if no rows
  } catch (error) {
    console.error("Database query error:", error.message);
    throw error; // Rethrow error for further handling
  } finally {
    connection.release(); // Ensure the connection is released
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
  deleteTraineeInfo,
  getTraineeInfoByTraineeId,
  TraineeInfoById,
};

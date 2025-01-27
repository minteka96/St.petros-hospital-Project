const conn = require("../Config/db.config");

async function getAllTrainingData() {
  const sql = `
    SELECT 
      c.course_id,
      c.trainee_id,
      c.schedule_id,
      c.course_name,
      c.pri_score,
      c.post_score,
      ts.status_id,
      ts.registration,
      ts.pri_test,
      ts.post_test,
      ts.certificate
    FROM courses c
    LEFT JOIN trainees_status ts 
      ON c.trainee_id = ts.trainee_id 
      AND c.course_name = ts.course_name
  `;
  
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql);
    return rows;
  } finally {
    await connection.release();
  }
}

async function getTrainingDataById(trainee_id) {
  const sql = `
    SELECT 
      c.course_id,
      c.trainee_id,
      c.schedule_id,
      c.course_name,
      c.pri_score,
      c.post_score,
      ts.status_id,
      ts.registration,
      ts.pri_test,
      ts.post_test,
      ts.certificate
    FROM courses c
    LEFT JOIN trainees_status ts 
      ON c.trainee_id = ts.trainee_id 
      AND c.course_name = ts.course_name
    WHERE ts.trainee_id = ?
  `;

  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql, [trainee_id]);
    return rows || null; // Return null if no data is found
  } catch (error) {
    console.error("Database Query Error:", error.message);
    throw error; // Re-throw the error for further handling
  } finally {
    await connection.release();
  }
}


module.exports = {
  getAllTrainingData,
  getTrainingDataById
};

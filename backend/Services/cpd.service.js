const conn = require("../Config/db.config");

// create a new applicant
async function createCpdCourse(courseData) {
  const sql = `INSERT INTO cpd_trainings ( course_name, course_level, pri_test, pri_test_duration, post_test, post_test_duration, minimum_score) VALUES (?, ?, ?, ?, ?, ? , ?)`;
  const {
    course_name,
    course_level,
    pri_test,
    pri_test_duration,
    post_test,
    post_test_duration,
    minimum_score
  } = courseData;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [
      course_name,
      course_level,
      pri_test,
      pri_test_duration,
      post_test,
      post_test_duration,
      minimum_score
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

// get all cpd courses
async function getAllCpdCourses() {
  const sql = `SELECT * FROM cpd_trainings`;
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

// get cpd course by id
async function getCpdCourseById(courseId) {
  const sql = `SELECT * FROM cpd_trainings WHERE training_id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql, [courseId]);
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

// delete cpd course by id
async function deleteCpdCourseById(courseId) {
  const sql = `DELETE FROM cpd_trainings WHERE training_id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [courseId]);
    await connection.commit();
    return result.affectedRows > 0;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

// update cpd course by id
async function updateCpdCourseById(id, courseData) {
  const sql = `UPDATE cpd_trainings SET course_name = ?, course_level = ?, pri_test = ?, pri_test_duration = ?, post_test = ?, post_test_duration = ?, minimum_score = ? WHERE training_id = ?`;
  const {
    course_name,
    course_level,
    pri_test,
    pri_test_duration,
    post_test,
    post_test_duration,
    minimum_score,
  } = courseData;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [
      course_name,
      course_level,
      pri_test,
      pri_test_duration,
      post_test,
      post_test_duration,
      minimum_score,
      id,
    ]);
    await connection.commit();
    return result.affectedRows > 0;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

// export the functions
module.exports = {
  createCpdCourse,
  getAllCpdCourses,
  getCpdCourseById,
  deleteCpdCourseById,
  updateCpdCourseById
};

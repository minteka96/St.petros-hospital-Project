const conn = require("../Config/db.config");

// create a new applicant
async function createApplicant(formData) {
  const sql = `INSERT INTO Applicant ( first_name, last_name, email_address, phone_number, position_applied_for, additional_information, cv_file_path, other_testimonials) VALUES (?,  ?, ?, ?, ?, ? , ?, ?)`;
  const {
    first_name,
    last_name,
    email_address,
    phone_number,
    position_applied_for,
    additional_information,
    cv_file_path,
    other_testimonials,
  } = formData;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [
      first_name,
      last_name,
      email_address,
      phone_number,
      position_applied_for,
      additional_information,
      cv_file_path,
      other_testimonials,
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

// get all applicants
async function getAllApplicants() {
  const sql = `SELECT * FROM Applicant`;
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

// get applicant by id
async function getApplicantById(applicantId) {
  const sql = `SELECT * FROM Applicant WHERE id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql, [applicantId]);
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

// delete applicant by id
async function deleteApplicant(id) {
  const sql = `DELETE FROM Applicant WHERE id = ?`;
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

//delete applicant by job title
async function deleteApplicantByVacancyId(jobTitle) {
  const sql = `DELETE FROM Applicant WHERE position_applied_for = ?`;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [jobTitle]);
    await connection.commit();
    return result.affectedRows > 0;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

// delete all applicants
async function deleteAllApplicants() {
  const sql = `DELETE FROM Applicant`;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql);
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
  createApplicant,
  getAllApplicants,
  getApplicantById,
  deleteApplicant,
  deleteApplicantByVacancyId,
  deleteAllApplicants,
};

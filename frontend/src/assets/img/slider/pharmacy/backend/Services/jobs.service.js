const conn = require("../Config/db.config");

async function createJob(jobData) {
  const insertVacancyQuery = `
        INSERT INTO Vacancy 
        (job_title,
        job_description,
        job_requirements,
        qualifications,
        job_grade,
        terms,
        salary,
        address,
        application_link,
        deadline) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const {
    job_title,
    job_description,
    job_requirements,
    qualifications,
    job_grade,
    terms,
    salary,
    address,
    application_link,
    deadline,
  } = jobData;

  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();

    const [resultIdentifier] = await connection.query(insertVacancyQuery, [
      job_title,
      job_description,
      job_requirements,
      qualifications,
      job_grade,
      terms,
      salary,
      address,
      application_link,
      deadline,
    ]);

    const id = resultIdentifier.insertId;

    await connection.commit();
    return id; // Optionally return the id if needed
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

// Function to get all jobs
async function getAllJobs() {
  const selectAllVacanciesQuery = `SELECT * FROM Vacancy`;

  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(selectAllVacanciesQuery);
    return rows; // Returns an array of all vacancy records
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

//Function to get job by id
async function getJobById(vacancy_id) {
  const selectJobByIdQuery = `SELECT * FROM Vacancy WHERE vacancy_id = ?`;

  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(selectJobByIdQuery, [vacancy_id]);
    return rows[0] || null; // Return the job if found, otherwise return null
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

// Function to delete the job by id
async function deleteJob(vacancy_id) {
  const deleteJobQuery = `DELETE FROM Vacancy WHERE vacancy_id = ?`;

  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(deleteJobQuery, [vacancy_id]);
    await connection.commit();
    return result.affectedRows > 0;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}
// Export the function
module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  deleteJob,
};
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

    const jobId = resultIdentifier.insertId;

    await connection.commit();
    return jobId; // Optionally return the jobId if needed
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

module.exports = {
  createJob,
};

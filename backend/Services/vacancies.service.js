const db = require("../Config/db.config");

const createVacancy = async (data) => {
  const {
    jobTitle,
    qualification,
    experience,
    jobGrade,
    salary,
    address,
    howToApply,
    type,
    location,
    deadline,
  } = data;

  try {
    const result = await db.query(
      `INSERT INTO vacancy 
          (job_title, qualifications, job_experience, job_grade, terms, salary, address, application_link, location, deadline)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        jobTitle,
        qualification,
        experience,
        jobGrade,
        type,
        salary,
        address,
        howToApply,
        location,
        deadline,
      ]
    );

    return { id: result.insertId };
  } catch (err) {
    console.error("Database error:", err.message);
    throw new Error("Error creating vacancy: " + err.message);
  }
};
const getAllJobs = async () => {
  try {
    const rows = await db.query("SELECT * FROM vacancy");
    return rows;
  } catch (err) {
    throw new Error("Error fetching vacancies: " + err.message);
  }
};

const deleteJobById = async (jobId) => {
  try {
    console.log(jobId);
    await db.query("DELETE FROM vacancy WHERE id = ?", [jobId]);

    return { message: "Job deleted successfully" };
  } catch (err) {
    throw new Error("Error deleting job: " + err.message);
  }
};
module.exports = { createVacancy, getAllJobs, deleteJobById };

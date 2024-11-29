const vacanciesService = require("../Services/vacancies.service");

const createVacancy = async (req, res) => {
  try {
    console.log("Received request body:", req.body);

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
    } = req.body;

    const vacanciesData = {
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
    };

    const response = await vacanciesService.createVacancy(vacanciesData);
    res.status(201).json({ success: true, id: response.id });
  } catch (error) {
    console.error("Controller error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await vacanciesService.getAllJobs(); // Ensure this service exists
    console.log(jobs);
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
const deleteJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await vacanciesService.deleteJobById(id);
    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
module.exports = { createVacancy, getAllJobs, deleteJobById };

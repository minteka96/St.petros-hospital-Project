const jobService = require("../Services/jobs.service");

async function createJob(req, res) {
  try {
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
    } = req.body;

    // Validate required fields
    if (
      !job_title ||
      !job_description ||
      !job_requirements ||
      !qualifications ||
      !job_grade ||
      !terms ||
      !salary ||
      !address ||
      !application_link ||
      !deadline
    ) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Please provide all required fields",
      });
    }

    // Create job
    await jobService.createJob(req.body);

    // Send success response
    res.status(201).json({
      message: "Job created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
}

// Export the function

// Controller to get all jobs
async function getAllJobs(req, res) {
  try {
    const jobs = await jobService.getAllJobs();

    // If no jobs found, return a 404 status with a message
    if (jobs.length === 0) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }

    // Send jobs in response
    res.status(200).json({
      message: "Jobs retrieved successfully",
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
}

// Controller to get a job by ID
async function getJobById(req, res) {
  const { id } = req.params;
  console.log("id", id);

  try {
    const job = await jobService.getJobById(id);

    // If job not found, return a 404 status
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    // Send job in response
    res.status(200).json({
      message: "Job retrieved successfully",
      success: true,
      data: job,
    });
  } 
  catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
      error: error,
    });
  }
}
module.exports = {
  createJob,
  getAllJobs,
  getJobById,
};

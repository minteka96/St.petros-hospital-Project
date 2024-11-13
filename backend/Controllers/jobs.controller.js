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
module.exports = {
  createJob,
};

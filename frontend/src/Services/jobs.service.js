const api_url = import.meta.env.VITE_API_URL;

// Function to create a new job
const createJob = async (jobData) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(jobData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${api_url}/api/jobs`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;  // Throw error to be caught in the component
  }
};

// Function to get all job listings
const getAllJobs = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": token, // Uncomment and set token if needed
    },
  };

  try {
    const response = await fetch(`${api_url}/api/jobs`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data.status !== "success") {
      throw new Error(
        "Failed to fetch jobs: " + (data.message || "Unknown error")
      );
    }
    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

// Function to get a specific job by its ID
const getJobById = async (job_id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": token, // Uncomment and set token if needed
    },
  };
  try {
    const response = await fetch(
      `${api_url}/api/jobs/${job_id}`,
      requestOptions
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    if (!data || !data.data) {
      throw new Error(
        `Failed to fetch job: ${data.message || "Unknown error"}`
      );
    }
    return data.data;
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
};

// Function to update an existing job
const updateJob = async (job_id, jobData) => {
  const requestOptions = {
    method: "PUT",
    body: JSON.stringify(jobData), // send job data in request body
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/jobs/${job_id}`,
      requestOptions
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating job:", error);
    throw error;
  }
};

// Function to delete a job
const deleteJob = async (job_id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": token, // Uncomment and set token if needed
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/jobs/${job_id}`,
      requestOptions
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    if (data.status === "success") {
      return data;
    } else {
      throw new Error(
        `Failed to delete job: ${data.message || "Unknown error"}`
      );
    }
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error;
  }
};

// Export all the functions
const jobService = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
};

export default jobService;

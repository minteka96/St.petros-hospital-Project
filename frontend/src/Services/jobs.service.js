const api_url = import.meta.env.VITE_API_URL;


const getAllJobs = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${api_url}/api/vacancies`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw new Error("Unable to retrieve job listings. Please try again later.");
  }
};

// Function to create a new job
const createJob = async (jobData, token) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(jobData),
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/vacancies`, requestOptions);
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
// "x-access-token": token, // Uncomment and set token if needed


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
      `${api_url}/api/vacancies/${job_id}`,
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
      `${api_url}/api/vacancies/${job_id}`,
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
// "x-access-token": token, // Uncomment and set token if needed
const deleteJob = async (job_id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/vacancies/${job_id}`,
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

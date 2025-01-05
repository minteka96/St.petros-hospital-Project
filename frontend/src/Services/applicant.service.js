// import { head } from "../../../backend/Routes";

const api_url = import.meta.env.VITE_API_URL;

//function to post applications
const postApplicant = async (formDataToSend, token) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "x-access-token": token, // Do not set Content-Type; fetch handles it for FormData
    },
    body: formDataToSend, // FormData object
  };

  try {
    const response = await fetch(`${api_url}/api/applicant`, requestOptions);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        `Failed to submit application. Status: ${response.status}. Message: ${
          errorResponse.message || "Unknown error"
        }`
      );
    }

    return await response.json(); // Return parsed JSON response
  } catch (error) {
    console.error("Error submitting application:", error.message);
    throw error; // Rethrow for further handling by the caller
  }
};

// function to get all applications
const getAllApplicants = async (loggedInEmployeeToken) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInEmployeeToken,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/applicants`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      return data;
    }
    throw new Error(
      "Failed to fetch applications: " + (data.message || "Unknown error")
    );
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};

//function to get applications by id
const getApplicantById = async (id, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/applicant/${id}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (response.status === 200) {
      return data;
    }
    throw new Error(
      "Failed to fetch applications: " + (data.message || "Unknown error")
    );
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};

//function to delete applications by id
const deleteApplicant = async (id, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/applicant/${id}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (response.status === 200) {
      return data;
    }
    throw new Error(
      "Failed to fetch applications: " + (data.message || "Unknown error")
    );
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};

//delete all applications
const deleteAllApplicants = async () => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${api_url}/api/applicants`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (response.status === 200) {
      return data;
    }
    throw new Error(
      "Failed to fetch applications: " + (data.message || "Unknown error")
    );
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};

const deleteApplicantByJobTitle = async (jobTitle, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
  try {
    const response = await fetch(
      `${api_url}/api/applicants/${jobTitle}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (response.status === 200) {
      return data;
    }
    throw new Error(
      "Failed to fetch applications: " + (data.message || "Unknown error")
    );
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};
const updateApplicantStatus = async (id, status, token) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify({ status }), // Dynamically send the status
  };

  try {
    const response = await fetch(
      `${api_url}/api/applicant/${id}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (response.status === 200) {
      return data;
    }
    throw new Error(
      "Failed to update applicant status: " + (data.message || "Unknown error")
    );
  } catch (error) {
    console.error("Error updating applicant status:", error);
    throw error;
  }
};

const applicantService = {
  postApplicant,
  getAllApplicants,
  getApplicantById,
  deleteApplicant,
  deleteApplicantByJobTitle,
  deleteAllApplicants,
  updateApplicantStatus,
};
export default applicantService;

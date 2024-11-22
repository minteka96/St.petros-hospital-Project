// import { head } from "../../../backend/Routes";

const api_url = import.meta.env.VITE_API_URL;

// function to get all applications
const getAllApplicants = async () => {
  const requestOptions = {
    method: "GET",
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

//function to get applications by id
const getApplicantById = async (id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
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
const deleteApplicant = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
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
    const response = await fetch(
      `${api_url}/api/applicants`,
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

const applicantService = {
  getAllApplicants,
  getApplicantById,
  deleteApplicant,
  deleteAllApplicants,
};
export default applicantService;

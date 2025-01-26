const api_url = import.meta.env.VITE_API_URL;

const getAllTrainingData = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/training-data`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching training data:", error);
    throw error;
  }
};




const getTrainingDataById = async (token,trainee_id ) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/training-data/${trainee_id}`,
      requestOptions
    );
    console.log("first response",response)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching training data:", error);
    throw error;
  }
};

const deleteTrainingData = async (id, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/training-data/${id}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting training data:", error);
    throw error;
  }
};

const trainCourseStatusService = {
  getAllTrainingData,
  getTrainingDataById,
  deleteTrainingData,
};

export default trainCourseStatusService;

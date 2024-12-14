const api_url = import.meta.env.VITE_API_URL;

// Function to send POST request to create a new health tip
const createHealthTip = async (formData, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "POST",
    headers: {
      "x-access-token": token, // Avoid setting Content-Type for FormData
    },
    body: formData,
  };

  try {
    const response = await fetch(`${api_url}/api/healthtips`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating health tip:", error);
    throw error;
  }
};

// Function to send GET request to fetch all health tips
const getAllHealthTips = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/healthtips`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // if (data.status !== "success") {
    //   throw new Error(
    //     "Failed to fetch health tips: " + (data.message || "Unknown error")
    //   );
    // }
    return data;
  } catch (error) {
    console.error("Error fetching health tips:", error);
    throw error;
  }
};

// Function to send GET request to fetch a specific health tip by ID
const getHealthTipById = async (healthTipId) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/healthtips/${healthTipId}`,
      requestOptions
    );
    // if (!response.ok) {
    //   const errorText = await response.text();
    //   throw new Error(
    //     `HTTP error! Status: ${response.status}, Details: ${errorText}`
    //   );
    // }
    const data = await response.json();
    if (!data || !data.data) {
      throw new Error(
        `Failed to fetch health tip: ${data.message || "Unknown error"}`
      );
    }
    return data.data;
  } catch (error) {
    console.error("Error fetching health tip:", error);
    throw error;
  }
};

// Function to send PUT request to update a specific health tip
const updateHealthTip = async (healthTipId, formData, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "PUT",
    headers: {
      "x-access-token": token,
    },
    body: formData,
  };

  try {
    const response = await fetch(
      `${api_url}/api/healthtips/${healthTipId}`,
      requestOptions
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating health tip:", error);
    throw error;
  }
};

// Function to send DELETE request to delete a specific health tip
const deleteHealthTip = async (healthTipId, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "DELETE",
    headers: {
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/healthtips/${healthTipId}`,
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
        `Failed to delete health tip: ${data.message || "Unknown error"}`
      );
    }
  } catch (error) {
    console.error("Error deleting health tip:", error);
    throw error;
  }
};

// Export all the functions
const healthTipService = {
  createHealthTip,
  getAllHealthTips,
  getHealthTipById,
  updateHealthTip,
  deleteHealthTip,
};

export default healthTipService;

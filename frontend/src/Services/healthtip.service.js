const api_url = import.meta.env.VITE_API_URL;

// A function to send POST request to create a new health tip
const createHealthTip = async (formData, token) => {
  const requestOptions = {
    method: "POST",
    body: formData,
    headers: {
      "x-access-token": token, // Don't manually set Content-Type for FormData
    },
  };

  try {
    const response = await fetch(`${api_url}/api/health-tips`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating health tip:", error);
    throw error; // Throw error to be caught in the component
  }
};

// A function to send GET request to get all health tips
const getAllHealthTips = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/health-tips`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data.status !== "success") {
      throw new Error(
        "Failed to fetch health tips: " + (data.message || "Unknown error")
      );
    }
    return data;
  } catch (error) {
    console.error("Error fetching health tips:", error);
    throw error;
  }
};

// A function to send GET request to get a specific health tip by its ID
const getHealthTipById = async (healthTipId) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": token,
    },
  };
  try {
    const response = await fetch(
      `${api_url}/api/health-tips/${healthTipId}`,
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
        `Failed to fetch health tip: ${data.message || "Unknown error"}`
      );
    }
    return data.data;
  } catch (error) {
    console.error("Error fetching health tip:", error);
    throw error;
  }
};

// A function to send PUT request to update a specific health tip
const updateHealthTip = async (healthTipId, formData) => {
  const requestOptions = {
    method: "PUT",
    body: formData, // FormData includes files and text data
  };
  try {
    const response = await fetch(
      `${api_url}/api/health-tips/${healthTipId}`,
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
    console.error("Error updating health tip:", error);
    throw error;
  }
};

// A function to send DELETE request to delete a specific health tip
const deleteHealthTip = async (healthTipId) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/health-tips/${healthTipId}`,
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

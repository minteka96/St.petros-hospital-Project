/* eslint-disable no-unused-vars */
const api_url = import.meta.env.VITE_API_URL;

// Create a new CPD news entry
const createCpdNews = async (formData, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Added Content-Type
      "x-access-token": token, // Authorization token
    },
    body: JSON.stringify(formData), // Serialize formData to JSON
  };

  try {
    const response = await fetch(`${api_url}/api/cpd-news`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating CPD news:", error);
    throw error;
  }
};
// Get all CPD news entries
const getAllCpdNews = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${api_url}/api/cpd-news`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "success") {
      throw new Error(
        `Failed to fetch CPD news: ${data.message || "Unknown error"}`
      );
    }

    return data;
  } catch (error) {
    console.error("Error fetching CPD news:", error);
    throw error;
  }
};

// Get a specific CPD news item by ID
const getCpdNewsById = async (news_id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/cpd-news/${news_id}`,
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
        `Failed to fetch CPD news: ${data.message || "Unknown error"}`
      );
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching CPD news:", error);
    throw error;
  }
};

const updateCpdNews = async (news_id, formData, token) => {
  try {
    const response = await fetch(`/api/cpd-news/${news_id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // Remove Content-Type header for FormData
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text(); // Try to parse the error as text
      let errorDetails;
      try {
        errorDetails = JSON.parse(errorText); // Try parsing as JSON
      } catch (e) {
        errorDetails = errorText; // If it fails, use the raw text
      }
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${JSON.stringify(errorDetails)}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error updating CPD news:", err);
    throw err; // Propagate the error to be handled by the frontend
  }
};


// Delete a specific CPD news item
const deleteCpdNews = async (news_id, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "DELETE",
    headers: {
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/cpd-news/${news_id}`,
      requestOptions
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }

    const data = await response.json();

    if (data.status !== "success") {
      throw new Error(
        `Failed to delete CPD news: ${data.message || "Unknown error"}`
      );
    }

    return data;
  } catch (error) {
    console.error("Error deleting CPD news:", error);
    throw error;
  }
};

// Export all CPD news functions as a service
const cpd_newsService = {
  createCpdNews,
  getAllCpdNews,
  getCpdNewsById,
  updateCpdNews,
  deleteCpdNews,
};

export default cpd_newsService;

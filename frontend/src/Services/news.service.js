const api_url = import.meta.env.VITE_API_URL;

// Function to create a new news item
const createNews = async (formData, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "POST",
    headers: {
      "x-access-token": token, // Don't manually set Content-Type for FormData
    },
    body: formData,
  };

  try {
    const response = await fetch(`${api_url}/api/news`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating news:", error);
    throw error;
  }
};

// Function to fetch all news items
const getAllNews = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${api_url}/api/news`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    return data.data; // Assuming the data is nested under `data`
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

// Function to fetch a single news item by its ID
const getNewsById = async (news_id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/news/${news_id}`,
      requestOptions
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    return data.data; // Assuming the data is nested under `data.data`
  } catch (error) {
    console.error("Error fetching news by ID:", error);
    throw error;
  }
};

// Function to update a news item
const updateNews = async (news_id, formData, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "PUT",
    headers: {
      "x-access-token": token, // Authentication token
    },
    body: formData, // FormData includes files and text data
  };

  try {
    const response = await fetch(
      `${api_url}/api/news/${news_id}`,
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
    console.error("Error updating news:", error);
    throw error;
  }
};

// Function to delete a news item
const deleteNews = async (news_id, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "DELETE",
    headers: {
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/news/${news_id}`,
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
    console.error("Error deleting news:", error);
    throw error;
  }
};

export default {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
};

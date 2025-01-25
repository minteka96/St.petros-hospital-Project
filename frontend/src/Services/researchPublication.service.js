/* eslint-disable no-unused-vars */
const api_url = import.meta.env.VITE_API_URL; // Define the API base URL

// Function to send POST request to create a new research publication
const createPublication = async (formData, token) => {
  if (!token) throw new Error("Token is missing.");

  console.log("Token in createPublication:", token); // Log token for debugging

  const requestOptions = {
    method: "POST",
    headers: {
      "x-access-token": token, // Authorization header
    },
    body: formData, // Send form data with the file
  };

  try {
    const response = await fetch(`${api_url}/api/research-publications`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
    }
    return await response.json(); // Return the response data
  } catch (error) {
    console.error("Error creating publication:", error);
    throw error;
  }
};

// Function to send GET request to fetch all research publications
const getAllPublications = async () => {
  

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
     
    },
  };

  try {
    const response = await fetch(`${api_url}/api/research-publications`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json(); // Return the list of publications
  } catch (error) {
    console.error("Error fetching publications:", error);
    throw error;
  }
};

// Function to send PUT request to update a research publication by ID
const updatePublication = async (publicationId, publicationData, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Ensure the content type is JSON
      "x-access-token": token, // Authorization header
    },
    body: JSON.stringify(publicationData), // Send updated publication data as JSON
  };

  try {
    const response = await fetch(`${api_url}/api/research-publications/${publicationId}`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
    }
    return await response.json(); // Return the response data
  } catch (error) {
    console.error("Error updating publication:", error);
    throw error;
  }
};

// Function to send DELETE request to delete a research publication by ID
const deletePublication = async (publicationId, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "DELETE",
    headers: {
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/research-publications/${publicationId}`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
    }
    return await response.json(); // Return the response data
  } catch (error) {
    console.error("Error deleting publication:", error);
    throw error;
  }
};

// Function to send GET request to fetch a research publication by ID
const getPublicationById = async (id, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  };

  try {
    const response = await fetch(`${api_url}/api/research-publications/${id}`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json(); // Return the response data
  } catch (error) {
    console.error("Error fetching publication:", error);
    throw error;
  }
};

// Exporting the publication service functions
const publicationService = {
  createPublication,
  getAllPublications,
  updatePublication,
  deletePublication,
  getPublicationById,
};

export default publicationService;

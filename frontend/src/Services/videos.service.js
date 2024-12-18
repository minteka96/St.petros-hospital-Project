const api_url = import.meta.env.VITE_API_URL; // Ensure your API URL is correct

// Helper function for fetching data
const handleResponse = async (response) => {
  const contentType = response.headers.get("Content-Type");
  const isJSON = contentType && contentType.includes("application/json");

  if (!response.ok) {
    const errorText = isJSON ? await response.json() : await response.text();
    throw new Error(
      `HTTP error! Status: ${response.status}, Details: ${JSON.stringify(
        errorText
      )}`
    );
  }

  return isJSON ? await response.json() : null;
};

const getAllVideos = async () => {
  // if (!video_id) throw new Error("Video ID is missing.");

  const requestOptions = {
    method: "GET",
    
  };

  try {
    const response = await fetch(`${api_url}/api/videos`, requestOptions);
    const data = await handleResponse(response);
    return data?.data || data; // Return the data structure provided by the backend
  } catch (error) {
    console.error("Error fetching video:", error.message);
    throw error;
  }
};
// *****
// Function to update a video embed
const updateVideoEmbed = async (updatedData, token) => {
  if (!updatedData) throw new Error("Updated data is missing.");
  const { videoId } = updatedData;

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Ensure the server understands JSON
      "x-access-token": token,
    },
    body: JSON.stringify(updatedData), // Serialize the body as JSON
  };

  try {
    const response = await fetch(
      `${api_url}/api/videos/${videoId}`,
      requestOptions
    );
    const data = await handleResponse(response);
    return data; // Return the updated data
  } catch (error) {
    console.error("Error updating video:", error.message);
    throw error;
  }
};


// Function to delete a specific video
const deleteVideoEmbed = async (videoId, token) => {
  if (!videoId) throw new Error("Video ID is missing.");
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "DELETE",
    headers: {
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/videos/${videoId}`,
      requestOptions
    );
    const data = await handleResponse(response);
    return data; // Assuming the response has {status: "success"} on success
  } catch (error) {
    console.error("Error deleting video:", error.message);
    throw error;
  }
};

// Export all the functions
const videoService = {
  getAllVideos,
  updateVideoEmbed,
  deleteVideoEmbed,
};

export default videoService;

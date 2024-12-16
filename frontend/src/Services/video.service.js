const api_url = import.meta.env.VITE_API_URL;

const createVideo = async (formData, token) => {
  if (!token) throw new Error("Token is missing.");
  
  if (!formData.video_link) {
    throw new Error("Video link is required");
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify({
      video_link: formData.video_link.trim()
    }),
  };

  const response = await fetch(`${api_url}/api/videos`, requestOptions);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorData.error}`);
  }
  return await response.json();
};

const getAllVideos = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${api_url}/api/videos`, requestOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  if (data.status !== "success") {
    throw new Error("Failed to fetch videos: " + (data.message || "Unknown error"));
  }
  return data;
};

const getVideoById = async (video_id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  const response = await fetch(`${api_url}/api/videos/${video_id}`, requestOptions);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
  }
  return await response.json();
};

const updateVideo = async (video_id, formData, token) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify({
      video_link: formData.video_link.trim()
    }),
  };
  
  const response = await fetch(`${api_url}/api/videos/${video_id}`, requestOptions);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorData.error}`);
  }
  return await response.json();
};

const deleteVideo = async (video_id, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "x-access-token": token,
    },
  };

  const response = await fetch(`${api_url}/api/videos/${video_id}`, requestOptions);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorData.error}`);
  }
  return await response.json();
};

const videoService = {
  createVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
};

export default videoService;

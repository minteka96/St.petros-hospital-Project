const videoService = require("../Services/videos.service.js");

// Function to create a new video embed
// const createVideoEmbed = async (req, res) => {
//   try {
//     // Extract data from the request body
//     const { title, video_link } = req.body;

//     // Validate required fields
//     if (!title || !video_link) {
//       return res.status(400).json({ error: "All fields are required." });
//     }

//     // Prepare video data
//     const videoData = {
//       title,
//       videoLink: video_link,
//     };

//     // Call the service to save the video embed
//     const result = await videoService.createVideoEmbed(videoData);

//     if (!result || !result.id) {
//       return res.status(500).json({ error: "Failed to create video embed." });
//     }

//     // Respond with success and created data
//     res.status(201).json({
//       message: "Video embed created successfully.",
//       data: { id: result.id, ...videoData },
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// Function to retrieve a single video embed by ID
const getVideoById = async (req, res) => {
  try {
    const videoId = req.params.id;
    // Validate that videoId is provided
    if (!videoId) {
      return res.status(400).json({ error: "Video ID is required!" });
    }
    // Fetch the video embed from the service
    const video = await videoService.getVideoById(videoId);
    // If no video found, respond with an error
    if (!video) {
      return res.status(404).json({ error: "Video embed not found!" });
    }
    // Return the video data
    res.status(200).json({ data: video });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to retrieve all video embeds
const getAllVideos = async (req, res) => {
  try {
    // Call the service to fetch all video embeds
    const videos = await videoService.getAllVideos();

    if (!videos || videos.length === 0) {
      return res.status(404).json({ error: "No video embeds found." });
    }

    res.status(200).json({
      status: "success",
      data: videos,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to update a video embed by ID
const updateVideoEmbed = async (req, res) => {
  try {
    const videoId = req.params.videoId; // Ensure videoId is retrieved from req.params
    const { title, video_link } = req.body;


    // Validate required fields
    if (!title || !video_link) {
      return res
        .status(400)
        .json({ error: "Title and video link are required." });
    }

    // Check if the video exists
    const existingVideo = await videoService.getVideoById(videoId);
    if (!existingVideo) {
      return res.status(404).json({ error: "Video embed not found." });
    }

    // Prepare updated video data
    const updatedData = { title, videoLink: video_link };

    // Call the service to update the video embed
    const result = await videoService.updateVideoEmbed(videoId, updatedData);
    if (!result) {
      return res.status(400).json({ error: "Failed to update video embed." });
    }

    res.status(200).json({
      status: "success",
      message: "Video embed updated successfully.",
      data: updatedData,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};


// Function to delete a video embed by ID
// const deleteVideoEmbed = async (req, res) => {
//   try {
//     const videoId = req.params.videoId;

//     // Validate that videoId is provided
//     if (!videoId) {
//       return res.status(400).json({ error: "Video ID is required." });
//     }

//     // Call the service to delete the video embed
//     const result = await videoService.deleteVideoEmbed(videoId);

//     if (!result) {
//       return res.status(404).json({ error: "Video embed not found." });
//     }

//     res.status(200).json({
//       status: "success",
//       message: "Video embed deleted successfully.",
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// Export all controller functions
module.exports = {
  // createVideoEmbed,
  getVideoById,
  getAllVideos,
  updateVideoEmbed,
  // deleteVideoEmbed,
};

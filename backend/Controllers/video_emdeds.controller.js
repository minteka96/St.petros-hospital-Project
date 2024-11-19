const videoService = require("../Services/video.service");

// Controller to get all videos
async function getAllVideos(req, res) {
  try {
    const videos = await videoService.getAllVideos();

    // If no videos found, return a 404 status with a message
    if (videos.length === 0) {
      return res.status(404).json({
        message: "No videos found",
        success: false,
      });
    }

    // Send videos in response
    res.status(200).json({
      message: "videos retrieved successfully",
      success: true,
      data: videos,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
}

// Controller to get a video by ID
async function getVideoById(req, res) {
  const { id } = req.params;
  console.log("id", id);

  try {
    const Video = await videoService.getVideoById(id);

    // If video not found, return a 404 status
    if (!Video) {
      return res.status(404).json({
        message: "Video not found",
        success: false,
      });
    }

    // Send Video in response
    res.status(200).json({
      message: "Video retrieved successfully",
      success: true,
      data: Video,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
      error: error,
    });
  }
}


async function updateVideo(req, res, next) {
  try {
    // Capture the original Video ID from the request body
    const video_id = req.body.video_id;
    if (!video_id) {
      return res.status(400).json({ error: "Video ID is required" });
    }

    // Update the Video
    const videoData = req.body;
    const updatedVideo = await videoService.updateVideo(videoData);

    if (!updatedVideo.video_id) {
      return res.status(400).json({ error: "Failed to update the video!" });
    }

    return res
      .status(200)
      .json({ status: "video updated successfully", video_id: updatedVideo.video_id });
  } catch (err) {
    console.error("Update error:", err.message);
    return res.status(500).json({ error: "Something went wrong!" });
  }
}

module.exports = { getAllVideos, getVideoById, updateVideo };

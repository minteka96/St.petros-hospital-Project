const db = require("../Config/db.config");

// Function to fetch a single video embed by ID
const getVideoById = async (videoId) => {
  try {
    const [result] = await db.query(
      `SELECT * FROM video_embeds WHERE video_id = ?`,
      [videoId]
    );

    // Return the fetched video embed or null if not found
    return result ? result : null;
  } catch (err) {
    console.error("Error fetching video embed:", err);
    throw new Error("Error fetching video embed: " + err.message);
  }
};

// Function to fetch all video embeds
const getAllVideos = async () => {
  try {
    const [result] = await db.query(`SELECT * FROM video_embeds`);

    // Ensure we return an empty array if no results are found
    return result || [];
  } catch (err) {
    console.error("Error fetching video embeds:", err);
    throw new Error("Error fetching video embeds: " + err.message);
  }
};

// Function to update a video embed by ID
const updateVideoEmbed = async (videoId, data) => {
  const { title, videoLink } = data;

  try {
    // Validate videoId type before proceeding
    if (isNaN(videoId)) {
      throw new Error("Invalid video ID format.");
    }
    const result = await db.query(
      `UPDATE video_embeds 
       SET title = ?, video_link = ?
       WHERE video_id = ?`,
      [title, videoLink, videoId]
    );

    // Check if any rows were affected (updated)
    if (result.affectedRows === 0) {
      return false; // Return false if no video was updated
    }

    // Return true if the video embed was updated successfully
    return true;
  } catch (err) {
    console.error("Error updating video embed:", err);
    throw new Error("Error updating video embed: " + err.message);
  }
};

// Function to delete a video embed by ID
// const deleteVideoEmbed = async (videoId) => {
//   try {
//     // Validate videoId type before proceeding
//     if (isNaN(videoId)) {
//       throw new Error("Invalid video ID format.");
//     }

//     const result = await db.query(
//       `DELETE FROM video_embeds WHERE video_id = ?`,
//       [videoId]
//     );

//     // Check if any rows were deleted
//     if (result.affectedRows === 0) {
//       return false; // Return false if no video was deleted
//     }

//     // Return true if the video embed was deleted successfully
//     return true;
//   } catch (err) {
//     console.error("Error deleting video embed:", err);
//     throw new Error("Error deleting video embed: " + err.message);
//   }
// };

// Export all service functions
module.exports = {
  // createVideoEmbed,
  getVideoById,
  getAllVideos,
  updateVideoEmbed,
  // deleteVideoEmbed,
};

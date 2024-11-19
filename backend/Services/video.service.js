const conn = require("../Config/db.config");
// Function to get all videos
async function getAllVideos() {
  const selectAllVideos = `SELECT * FROM video_embeds`;

  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(selectAllVideos);
    return rows; // Returns an array of all vacancy records
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}
//Function to get video by id
async function getVideoById(video_id) {
  const selectVideoById = `SELECT * FROM video_embeds WHERE video_id = ?`;

  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(selectVideoById, [video_id]);
    return rows[0] || null; // Return the video  if found, otherwise return null
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}



async function updateVideo(video) {
  let updatedFields = {};
  let updatedVideo = {};

  try {
    // Ensure video_id is provided
    if (!video.video_id) {
      throw new Error("Video ID is required");
    }

    // Retrieve the original video data
    const originalVideoData = await getVideoById(video.video_id);
    if (!originalVideoData || originalVideoData.length === 0) {
      throw new Error("Video not found");
    }

    // Prepare fields for update
    updatedFields.title =
      video.title !== undefined ? video.title : originalVideoData[0].title;
    updatedFields.description =
      video.description !== undefined
        ? video.description
        : originalVideoData[0].description;
    updatedFields.video_link =
      video.video_link !== undefined
        ? video.video_link
        : originalVideoData[0].video_link;
    updatedFields.thumbnail_link =
      video.thumbnail_link !== undefined
        ? video.thumbnail_link
        : originalVideoData[0].thumbnail_link;

    // Update the video_embeds table
    const updatevideoQuery = `
      UPDATE video_embeds
      SET title = ?, 
          description = ?, 
          video_link = ?, 
          thumbnail_link = ?
      WHERE video_id = ?`;

    await conn.query(updatevideoQuery, [
      updatedFields.title,
      updatedFields.description,
      updatedFields.video_link,
      updatedFields.thumbnail_link,
      video.video_id,
    ]);

    // Return the updated fields
    updatedVideo = { ...updatedFields, video_id: video.video_id };
  } catch (err) {
    console.error("Update failed:", err.message);
    throw new Error("Failed to update video: " + err.message);
  }

  return updatedVideo;
}
module.exports = { getAllVideos, getVideoById, updateVideo };
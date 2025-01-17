const db = require("../Config/db.config");

// Function to create a health tip in the database
const createHealthTip = async (data) => {
  const {
    healthTipTitle,
    healthTipDetail,
    healthTipDescription,
    healthTipLink,
    healthTipVideoLink,
    healthTipImageLink,
  } = data;

  try {
    // Insert the health tip
    const result = await db.query(
      `INSERT INTO Health_Tips (health_tip_title, health_tip_detail, health_tip_description, health_tip_link, health_tip_video_link, health_tip_image)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        healthTipTitle,
        healthTipDetail,
        healthTipDescription || null, // Allow optional description
        healthTipLink || null, // Allow optional link
        healthTipVideoLink || null, // Allow optional video link
        healthTipImageLink,
      ]
    );
    const healthTipId = result.insertId;

    return {
      id: healthTipId,
      healthTipTitle,
      healthTipDetail,
      healthTipDescription,
      healthTipLink,
      healthTipVideoLink,
      healthTipImageLink,
    };
  } catch (err) {
    console.error("Error creating health tip:", err);
    throw new Error("Error creating health tip: " + err.message);
  }
};

// Function to fetch a health tip by its ID
const getHealthTipById = async (healthTipId) => {
  try {
    const result = await db.query(
      `SELECT * FROM Health_Tips WHERE health_tip_id = ?`,
      [healthTipId]
    );
    return result[0] || null;
  } catch (err) {
    console.error("Error fetching health tip by ID:", err);
    throw new Error("Error fetching health tip by ID: " + err.message);
  }
};

// Function to fetch all health tips
const getAllHealthTips = async () => {
  try {
    const result = await db.query(`SELECT * FROM Health_Tips`);
    return result;
  } catch (err) {
    console.error("Error fetching all health tips:", err);
    throw new Error("Error fetching health tips: " + err.message);
  }
};

// Function to update a health tip
const updateHealthTip = async (healthTipId, data) => {
  const {
    healthTipTitle,
    healthTipDetail,
    healthTipDescription,
    healthTipLink,
    healthTipVideoLink,
    healthTipImageLink,
  } = data;

  try {
    // Fetch the current health tip to retain the existing image if no new image is provided
    const currentHealthTip = await getHealthTipById(healthTipId);
    if (!currentHealthTip) {
      throw new Error("Health tip not found");
    }

    // Use the new image link if provided, otherwise keep the existing one
    const imageLinkToUpdate =
      healthTipImageLink || currentHealthTip.health_tip_image;

    // Update the Health_Tips table
    const result = await db.query(
      `UPDATE Health_Tips SET health_tip_title = ?, health_tip_detail = ?, health_tip_description = ?, health_tip_link = ?, health_tip_video_link = ?, health_tip_image = ? WHERE health_tip_id = ?`,
      [
        healthTipTitle,
        healthTipDetail,
        healthTipDescription || null,
        healthTipLink || null,
        healthTipVideoLink || null,
        imageLinkToUpdate,
        healthTipId,
      ]
    );

    if (result.affectedRows === 0) return false;

    return true;
  } catch (err) {
    console.error("Error updating health tip:", err);
    throw new Error("Error updating health tip: " + err.message);
  }
};

// Function to delete a health tip
const deleteHealthTip = async (healthTipId) => {
  try {
    const result = await db.query(
      `DELETE FROM Health_Tips WHERE health_tip_id = ?`,
      [healthTipId]
    );
    return result.affectedRows > 0;
  } catch (err) {
    console.error("Error deleting health tip:", err);
    throw new Error("Error deleting health tip: " + err.message);
  }
};

module.exports = {
  createHealthTip,
  getHealthTipById,
  getAllHealthTips,
  updateHealthTip,
  deleteHealthTip,
};

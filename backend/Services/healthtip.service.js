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
    // The INSERT query should return an array with the result at index 0
    const result = await db.query(
      `INSERT INTO Health_Tips (health_tip_title,health_tip_detail, health_tip_description, health_tip_link, health_tip_video_link, health_tip_image )
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        healthTipTitle,
        healthTipDetail,
        healthTipDescription,
        healthTipLink,
        healthTipVideoLink,
        healthTipImageLink,
      ]
    );

    // Return the inserted ID and other details
    return {
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

// Function to fetch a health tip by ID
const getHealthTipById = async (healthTipId) => {
  try {
    const result = await db.query(
      `SELECT * FROM Health_Tips WHERE health_tip_id = ?`,
      [healthTipId]
    );

    // Return the health tip if found, otherwise null
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
    console.error("Error fetching health tips:", err);
    throw new Error("Error fetching health tips: " + err.message);
  }
};

// Function to update a health tip by ID
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

    const result = await db.query(
      `UPDATE Health_Tips
      SET health_tip_title = ?, health_tip_detail= ?, health_tip_description= ?, health_tip_link= ?, health_tip_video_link= ?, health_tip_image = ?
      WHERE health_tip_id = ?`,
      [
        healthTipTitle,
        healthTipDetail,
        healthTipDescription,
        healthTipLink,
        healthTipVideoLink,
        healthTipImageLink,
        healthTipId,
      ]
    );

    // Check if any rows were affected
    if (result.affectedRows === 0) {
      return false; // No health tip found with the given ID
    }

    return true; // Successful update
  } catch (err) {
    console.error("Error updating health tip:", err);
    throw new Error("Error updating health tip: " + err.message);
  }
};

// Function to delete a health tip by ID
const deleteHealthTip = async (healthTipId) => {
  try {
    const result = await db.query(
      `DELETE FROM Health_Tips WHERE health_tip_id = ?`,
      [healthTipId]
    );

    // Check if any rows were affected
    if (result.affectedRows === 0) {
      return false; // No health tip found with the given ID
    }

    return true; // Successful deletion
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

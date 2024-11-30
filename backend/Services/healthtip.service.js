const db = require("../Config/db.config");

const createHealthTip = async (data) => {
  const { healthTipTitle, healthTipDescription, imageLink, videoLink } = data;

  try {
    const result = await db.query(
      `INSERT INTO Health_Tips (health_tip_title, health_tip_description, image_link, video_link)
      VALUES (?, ?, ?, ?)`,
      [healthTipTitle, healthTipDescription, imageLink || null, videoLink || null]
    );

    return { id: result.insertId };
  } catch (err) {
    console.error("Error creating healthTip:", err);
    throw new Error("Error creating healthTip: " + err.message);
  }
};

const getHealthTipById = async (healthTipId) => {
  try {
    const result = await db.query(
      `SELECT * FROM Health_Tips WHERE health_tip_id = ?`,
      [healthTipId]
    );
    return result[0];
  } catch (err) {
    throw new Error("Error fetching healthTip: " + err.message);
  }
};

const getAllHealthTips = async () => {
  try {
    const result = await db.query(`SELECT * FROM Health_Tips`);
    return result;
  } catch (err) {
    throw new Error("Error fetching healthTips: " + err.message);
  }
};

const updateHealthTip = async (healthTipId, data) => {
  const { healthTipTitle, healthTipDescription, imageLink, videoLink } = data;

  try {
    const result = await db.query(
      `UPDATE Health_Tips
       SET health_tip_title = ?, health_tip_description = ?, image_link = ?, video_link = ?, updated_at = CURRENT_TIMESTAMP
       WHERE health_tip_id = ?`,
      [healthTipTitle, healthTipDescription, imageLink || null, videoLink || null, healthTipId]
    );

    return result.affectedRows > 0;
  } catch (err) {
    throw new Error("Error updating healthTip: " + err.message);
  }
};

const deleteHealthTip = async (healthTipId) => {
  try {
    await db.query(`DELETE FROM Health_Tips WHERE health_tip_id = ?`, [healthTipId]);
    return { message: "Health tip deleted successfully" };
  } catch (err) {
    throw new Error("Error deleting healthTip: " + err.message);
  }
};

module.exports = {
  createHealthTip,
  getHealthTipById,
  getAllHealthTips,
  updateHealthTip,
  deleteHealthTip,
};

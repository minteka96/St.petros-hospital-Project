const healthTipService = require("../Services/healthtip.service");

const createHealthTip = async (req, res) => {
  try {
    const { health_tip_title, health_tip_description, image_link } = req.body;
    const healthTipData = {
      healthTipTitle: health_tip_title,
      healthTipDescription: health_tip_description,
      imageLink: image_link || null,
    };
    const result = await healthTipService.createHealthTip(healthTipData);
    res.status(201).json({ message: "Health tip created", id: result.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllHealthTips = async (req, res) => {
  try {
    const healthTips = await healthTipService.getAllHealthTips();
    res.status(200).json(healthTips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHealthTipById = async (req, res) => {
  try {
    const healthTipId = req.params.id;
    const healthTip = await healthTipService.getHealthTipById(healthTipId);
    if (!healthTip) {
      return res.status(404).json({ error: "Health tip not found" });
    }
    res.status(200).json(healthTip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHealthTip = async (req, res) => {
  try {
    const healthTipId = req.params.id;
    const { health_tip_title, health_tip_description, image_link } = req.body;
    const updatedData = {
      healthTipTitle: health_tip_title,
      healthTipDescription: health_tip_description,
      imageLink: image_link || null,
    };
    const result = await healthTipService.updateHealthTip(healthTipId, updatedData);
    if (!result) {
      return res.status(404).json({ error: "Health tip not found" });
    }
    res.status(200).json({ message: "Health tip updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteHealthTip = async (req, res) => {
  try {
    const healthTipId = req.params.id;
    const result = await healthTipService.deleteHealthTip(healthTipId);
    if (!result) {
      return res.status(404).json({ error: "Health tip not found" });
    }
    res.status(200).json({ message: "Health tip deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createHealthTip,
  getAllHealthTips,
  getHealthTipById,
  updateHealthTip,
  deleteHealthTip,
};

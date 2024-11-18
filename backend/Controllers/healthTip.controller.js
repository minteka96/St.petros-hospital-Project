// Import the healthTip service to handle database operations related to healthTips
const healthTipService = require("../Services/helthtip.service");

// Function to create a new healthTip entry
const createHealthTip = async (req, res) => {
  try {
    console.log(req.body); // Log the request body for debugging

    // Destructure the healthTip data from the request body
    const { health_tip_title, health_tip_description, image_link } = req.body;

    // Validate that required fields (title and description) are present
    if (!health_tip_title || !health_tip_description) {
      return res
        .status(400)
        .json({ error: "Title and description fields are required" });
    }

    // Prepare the data to be sent to the healthTip service for creation
    const healthTipData = {
      healthTipTitle: health_tip_title,
      healthTipDescription: health_tip_description,
      imageLink: image_link, // Optional field
    };

    // Call the healthTip service to create the healthTip entry in the database
    const result = await healthTipService.createHealthTip(healthTipData);

    // Respond with a success message and the ID of the created healthTip entry
    res
      .status(201)
      .json({ message: "HealthTip created successfully", id: result.id });
  } catch (err) {
    // Catch and respond to errors
    res.status(500).json({ error: err.message });
  }
};

// Function to retrieve a single healthTip entry by its ID
const getHealthTipById = async (req, res) => {
  try {
    const healthTipId = req.params.id;

    const healthTip = await healthTipService.getHealthTipById(healthTipId);

    if (!healthTip) {
      return res.status(404).json({ error: "HealthTip not found" });
    }

    res.status(200).json(healthTip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to retrieve all healthTip entries
const getAllHealthTips = async (req, res) => {
  try {
    const healthTipList = await healthTipService.getAllHealthTips();
    res.status(200).json(healthTipList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to update an existing healthTip entry by its ID
const updateHealthTip = async (req, res) => {
  try {
    const healthTipId = req.params.id;

    const { health_tip_title, health_tip_description, image_link } = req.body;

    const updatedData = {
      healthTipTitle: health_tip_title,
      healthTipDescription: health_tip_description,
      imageLink: image_link, // Optional field
    };

    const result = await healthTipService.updateHealthTip(
      healthTipId,
      updatedData
    );

    if (!result) {
      return res.status(404).json({ error: "HealthTip not found" });
    }

    res.status(200).json({ message: "HealthTip updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to delete a healthTip entry by its ID
const deleteHealthTip = async (req, res) => {
  try {
    const healthTipId = req.params.id;

    const result = await healthTipService.deleteHealthTip(healthTipId);

    if (!result) {
      return res.status(404).json({ error: "HealthTip not found" });
    }

    res.status(200).json({ message: "HealthTip deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Export all the functions to be used in other parts of the application
module.exports = {
  createHealthTip,
  getHealthTipById,
  getAllHealthTips,
  updateHealthTip,
  deleteHealthTip,
};

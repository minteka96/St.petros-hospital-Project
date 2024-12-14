const healthTipService = require("../Services/healthtip.service");

// Function to create a health tip
const createHealthTip = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      health_tip_title,
      health_tip_detail,
      health_tip_description,
      health_tip_link,
      health_tip_video_link,
    } = req.body;

    // Validate required fields
    if (
      !health_tip_title ||
      !health_tip_detail ||
      !health_tip_description ||
      !health_tip_link ||
      !health_tip_video_link
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Get the file path for the uploaded image
    const health_tip_image = req.files?.health_tip_image
      ? `/uploads/healthtips/${req.files.health_tip_image[0].filename}`
      : null;
console.log(req.files.health_tip_image)
    // Prepare data for the service
    const healthTipData = {
      healthTipTitle: health_tip_title,
      healthTipDetail: health_tip_detail,
      healthTipDescription: health_tip_description,
      healthTipLink: health_tip_link,
      healthTipVideoLink: health_tip_video_link,
      healthTipImageLink: health_tip_image,
    };

    // Call the service to save the health tip to the database
    const result = await healthTipService.createHealthTip(healthTipData);

    // Build the response with the image URL and other data
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    res.status(201).json({
      message: "Health tip created successfully",
      data: {
        id: result.id,
        ...healthTipData,
        imageLink: health_tip_image ? `${baseUrl}${health_tip_image}` : null,
      },
    });
  } catch (err) {
    // Handle errors
    console.error("Error creating health tip:", err);
    res.status(500).json({ error: "Error creating health tip" });
  }
};

// Function to retrieve a single health tip by its ID
const getHealthTipById = async (req, res) => {
  try {
    const healthTipId = req.params.id;

    // Call the service to fetch the health tip by ID
    const healthTip = await healthTipService.getHealthTipById(healthTipId);

    // If the health tip is not found, return a 404 error
    if (!healthTip) {
      return res.status(404).json({ error: "Health tip not found" });
    }

    // Respond with the retrieved health tip data
    res.status(200).json({ data: healthTip });
  } catch (err) {
    // Handle errors
    console.error("Error fetching health tip:", err);
    res.status(500).json({ error: "Error fetching health tip" });
  }
};

// Function to retrieve all health tips
const getAllHealthTips = async (req, res) => {
  try {
    // Call the service to get all health tips
    const healthTips = await healthTipService.getAllHealthTips();

    res.status(200).json({ data: healthTips });
  } catch (err) {
    // Handle errors
    console.error("Error fetching health tips:", err);
    res.status(500).json({ error: "Error fetching health tips" });
  }
};

// Function to update a health tip
const updateHealthTip = async (req, res) => {
  try {
    const healthTipId = req.params.id;
    const {
      health_tip_title,
      health_tip_description,
      health_tip_detail,
      health_tip_link,
      health_tip_video_link,
    } = req.body;

    // Validate required fields
    if (
      !health_tip_title ||
      !health_tip_description ||
      !health_tip_detail ||
      !health_tip_link ||
      !health_tip_video_link
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Get the file path for the uploaded image
    const health_tip_image = req.files?.health_tip_image
      ? `/uploads/healthtips/${req.files.health_tip_image[0].filename}`
      : null;

    // Get the existing health tip for comparison
    const existingHealthTip = await healthTipService.getHealthTipById(
      healthTipId
    );
    if (!existingHealthTip) {
      return res.status(404).json({ error: "Health tip not found" });
    }

    // Prepare data for the update
    const updatedData = {
      healthTipTitle: health_tip_title,
      healthTipDetail: health_tip_detail,
      healthTipDescription: health_tip_description,
      healthTipLink: health_tip_link,
      healthTipVideoLink: health_tip_video_link,
      healthTipImageLink: health_tip_image,
    };

    // Call the service to update the health tip
    const success = await healthTipService.updateHealthTip(
      healthTipId,
      updatedData
    );
console.log("RES",success)
    if (!success) {
      return res.status(404).json({ error: "Failed to update health tip" });
    }

    res.status(200).json({ message: "Health tip updated successfully" });
  } catch (err) {
    // Handle errors
    console.error("Error updating health tip:", err);
    res.status(500).json({ error: "Error updating health tip" });
  }
};

// Function to delete a health tip
const deleteHealthTip = async (req, res) => {
  try {
    const healthTipId = req.params.id;

    // Call the service to delete the health tip by ID
    const success = await healthTipService.deleteHealthTip(healthTipId);

    if (!success) {
      return res.status(404).json({ error: "Health tip not found" });
    }

    res.status(200).json({ message: "Health tip deleted successfully",status:"success" });
  } catch (err) {
    // Handle errors
    console.error("Error deleting health tip:", err);
    res.status(500).json({ error: "Error deleting health tip" });
  }
};

module.exports = {
  createHealthTip,
  getHealthTipById,
  getAllHealthTips,
  updateHealthTip,
  deleteHealthTip,
};

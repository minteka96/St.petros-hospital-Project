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
    if (!health_tip_title || !health_tip_detail || !health_tip_description) {
      return res
        .status(400)
        .json({ error: "Title, detail, and description are required" });
    }

    // Get the file path for the uploaded image
    const health_tip_image = req.files?.health_tip_image
      ? `/uploads/healthtips/${req.files.health_tip_image[0].filename}`
      : null;

    // Prepare data for the service
    const healthTipData = {
      healthTipTitle: health_tip_title,
      healthTipDetail: health_tip_detail,
      healthTipDescription: health_tip_description,
      healthTipLink: health_tip_link || null,
      healthTipVideoLink: health_tip_video_link || null,
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
    console.error("Error creating health tip:", err);
    res.status(500).json({ error: "Error creating health tip" });
  }
};

// Function to retrieve a single health tip by its ID
const getHealthTipById = async (req, res) => {
  try {
    const healthTipId = req.params.id;
    const healthTip = await healthTipService.getHealthTipById(healthTipId);

    if (!healthTip) {
      return res.status(404).json({ error: "Health tip not found" });
    }

    res.status(200).json({ data: healthTip });
  } catch (err) {
    console.error("Error fetching health tip:", err);
    res.status(500).json({ error: "Error fetching health tip" });
  }
};

// Function to retrieve all health tips
const getAllHealthTips = async (req, res) => {
  try {
    const healthTips = await healthTipService.getAllHealthTips();
    res.status(200).json({ data: healthTips });
  } catch (err) {
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
    if (!health_tip_title || !health_tip_description || !health_tip_detail) {
      return res
        .status(400)
        .json({ error: "Title, detail, and description are required" });
    }

    // Fetch existing health tip entry
    const existingHealthTip = await healthTipService.getHealthTipById(
      healthTipId
    );
    if (!existingHealthTip) {
      return res.status(404).json({ error: "Health tip not found" });
    }

    // Handle new file upload
    const health_tip_image = req.files?.health_tip_image
      ? `/uploads/healthtips/${req.files.health_tip_image[0].filename}`
      : existingHealthTip.healthTipImageLink;

    // Prepare updated data
    const updatedData = {
      healthTipTitle: health_tip_title,
      healthTipDetail: health_tip_detail,
      healthTipDescription: health_tip_description,
      healthTipLink: health_tip_link || existingHealthTip.healthTipLink,
      healthTipVideoLink:
        health_tip_video_link || existingHealthTip.healthTipVideoLink,
      healthTipImageLink: health_tip_image,
    };

    const success = await healthTipService.updateHealthTip(
      healthTipId,
      updatedData
    );

    if (!success) {
      return res.status(404).json({ error: "Failed to update health tip" });
    }

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const fullImageLink = `${baseUrl}${health_tip_image}`;

    res.status(200).json({
      message: "Health tip updated successfully",
      data: {
        ...updatedData,
        imageLink: fullImageLink,
      },
    });
  } catch (err) {
    console.error("Error updating health tip:", err);
    res.status(500).json({ error: "Error updating health tip" });
  }
};

// Function to delete a health tip
const deleteHealthTip = async (req, res) => {
  try {
    const healthTipId = req.params.id;
    const success = await healthTipService.deleteHealthTip(healthTipId);

    if (!success) {
      return res.status(404).json({ error: "Health tip not found" });
    }

    res
      .status(200)
      .json({ message: "Health tip deleted successfully", status: "success" });
  } catch (err) {
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

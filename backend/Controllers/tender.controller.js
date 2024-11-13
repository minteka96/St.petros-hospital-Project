const tenderService = require("../Services/tender.service");

const createTender = async (req, res) => {
  try {
    const {
      tenderTitle,
      category,
      description,
      openingDate,
      closingDate,
      estimatedBudget,
      timeline,
    } = req.body;

    // Validate required fields
    if (
      !tenderTitle ||
      !category ||
      !description ||
      !openingDate ||
      !closingDate ||
      !estimatedBudget ||
      !timeline
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const tenderData = {
      tenderTitle,
      category,
      description,
      openingDate,
      closingDate,
      estimatedBudget,
      timeline,
    };

    const result = await tenderService.createTender(tenderData);
    res
      .status(201)
      .json({ message: "Tender created successfully", id: result.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createTender };

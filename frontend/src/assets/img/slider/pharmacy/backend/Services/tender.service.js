const db = require("../Config/db.config");

const createTender = async (data) => {
  const {
    tenderTitle,
    category,
    description,
    openingDate,
    closingDate,
    estimatedBudget,
    timeline,
    
  } = data;
  try {
    const result = await db.query(
      `INSERT INTO tenders (tenderTitle, category, description, openingDate, closingDate, estimatedBudget, timeline)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        tenderTitle,
        category,
        description,
        openingDate,
        closingDate,
        estimatedBudget,
        timeline,
       
      ]
    );
    return { id: result.insertId };
  } catch (err) {
    throw new Error("Error creating tender: " + err.message);
  }
};

module.exports = { createTender };

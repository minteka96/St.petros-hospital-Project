const db = require("../Config/db.config");

const createCpdNews = async ({ newsTitle, newsDescription, expiryDate }) => {
  try {
    const result = await db.query(
      `INSERT INTO cpd_news (news_title, news_description, expiry_date)
       VALUES (?, ?, ?)`,
      [newsTitle, newsDescription, expiryDate]
    );

    return {
      id: result.insertId,
      newsTitle,
      newsDescription,
      expiryDate,
    };
  } catch (err) {
    throw new Error("Error creating CPD news: " + err.message);
  }
};

module.exports = {
  createCpdNews
};

const getCpdNewsById = async (newsId) => {
  try {
    const result = await db.query(
      `SELECT * FROM cpd_news WHERE news_id = ?`,
      [newsId]
    );
    return result[0];
  } catch (err) {
    throw new Error("Error fetching CPD news: " + err.message);
  }
};

const getAllCpdNews = async () => {
  try {
    const result = await db.query(`SELECT * FROM cpd_news`);
    return result;
  } catch (err) {
    throw new Error("Error fetching CPD news: " + err.message);
  }
};

const updateCpdNews = async (newsId, data) => {
  const { newsTitle, newsDescription, expiryDate } = data;

  try {
    const result = await db.query(
      `UPDATE cpd_news 
       SET news_title = ?, news_description = ?, expiry_date = ?
       WHERE news_id = ?`,
      [newsTitle, newsDescription, expiryDate, newsId]
    );

    return result.affectedRows > 0;
  } catch (err) {
    throw new Error("Error updating CPD news: " + err.message);
  }
};

const deleteCpdNews = async (newsId) => {
  try {
    const result = await db.query(
      `DELETE FROM cpd_news WHERE news_id = ?`,
      [newsId]
    );
    return result.affectedRows > 0;
  } catch (err) {
    throw new Error("Error deleting CPD news: " + err.message);
  }
};

module.exports = {
  createCpdNews,
  getCpdNewsById,
  getAllCpdNews,
  updateCpdNews,
  deleteCpdNews
};

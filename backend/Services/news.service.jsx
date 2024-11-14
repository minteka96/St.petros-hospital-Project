const db = require("../Config/db.config.js");

const createNews = async (data) => {
  const { newsTitle, newsDetail, newsDescription, newsLink, newsImageLink } =
    data;

  try {
    const result = await db.query(
      `INSERT INTO News (news_title, news_detail, news_description, news_link, news_image_link)
      VALUES (?, ?, ?, ?, ?)`,
      [newsTitle, newsDetail, newsDescription, newsLink, newsImageLink]
    );

    return { id: result.insertId };
  } catch (err) {
    throw new Error("Error creating news: " + err.message);
  }
};

const getNewsById = async (newsId) => {
  try {
    const result = await db.query(`SELECT * FROM News WHERE news_id = ?`, [
      newsId,
    ]);
    return result[0];
  } catch (err) {
    throw new Error("Error fetching news: " + err.message);
  }
};

const getAllNews = async () => {
  try {
    const result = await db.query(`SELECT * FROM News`);
    return result;
  } catch (err) {
    throw new Error("Error fetching news: " + err.message);
  }
};

const updateNews = async (newsId, data) => {
  const { newsTitle, newsDetail, newsDescription, newsLink, newsImageLink } =
    data;

  try {
    await db.query(
      `UPDATE News 
       SET news_title = ?, news_detail = ?, news_description = ?, news_link = ?, news_image_link = ?
       WHERE news_id = ?`,
      [newsTitle, newsDetail, newsDescription, newsLink, newsImageLink, newsId]
    );

    return { message: "News updated successfully" };
  } catch (err) {
    throw new Error("Error updating news: " + err.message);
  }
};

const deleteNews = async (newsId) => {
  try {
    await db.query(`DELETE FROM News WHERE news_id = ?`, [newsId]);
    return { message: "News deleted successfully" };
  } catch (err) {
    throw new Error("Error deleting news: " + err.message);
  }
};

module.exports = {
  createNews,
  getNewsById,
  getAllNews,
  updateNews,
  deleteNews,
};

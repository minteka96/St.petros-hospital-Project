const db = require("../Config/db.config");

// Function to create a news entry in the database
const createNews = async (data) => {
  const { newsTitle, newsDetail, newsDescription, newsLink, newsImageLinks } =
    data;

  try {
    // Insert the news entry
    const result = await db.query(
      `INSERT INTO News (news_title, news_detail, news_description, news_link)
       VALUES (?, ?, ?, ?)`,
      [
        newsTitle,
        newsDetail,
        newsDescription || null, // Allow optional description
        newsLink || null, // Allow optional link
      ]
    );
    const newsId = result.insertId;

    // Insert associated image links if any
    if (newsImageLinks?.length > 0) {
      const placeholders = newsImageLinks.map(() => "(?, ?)").join(", ");
      const flattenedValues = newsImageLinks.flatMap((link) => [newsId, link]);

      await db.query(
        `INSERT INTO NewsImages (news_id, image_link) VALUES ${placeholders}`,
        flattenedValues
      );
    }

    return {
      id: newsId,
      newsTitle,
      newsDetail,
      newsDescription,
      newsLink,
      newsImageLinks,
    };
  } catch (err) {
    console.error("Error creating news:", err);
    throw new Error("Error creating news: " + err.message);
  }
};

// Function to fetch a news entry by its ID
const getNewsById = async (newsId) => {
  try {
    const result = await db.query(`SELECT * FROM News WHERE news_id = ?`, [
      newsId,
    ]);
    if (result.length === 0) return null;

    const images = await db.query(
      `SELECT image_link FROM NewsImages WHERE news_id = ?`,
      [newsId]
    );
    return {
      ...result[0],
      newsImageLinks: images.map((row) => row.image_link),
    };
  } catch (err) {
    console.error("Error fetching news by ID:", err);
    throw new Error("Error fetching news: " + err.message);
  }
};

// Function to fetch all news entries
const getAllNews = async () => {
  try {
    const news = await db.query(`SELECT * FROM News ORDER BY created_at DESC`);
    const newsWithImages = await Promise.all(
      news.map(async (item) => {
        const images = await db.query(
          `SELECT image_link FROM NewsImages WHERE news_id = ?`,
          [item.news_id]
        );
        return { ...item, newsImageLinks: images.map((row) => row.image_link) };
      })
    );
    return newsWithImages;
  } catch (err) {
    console.error("Error fetching all news:", err);
    throw new Error("Error fetching all news: " + err.message);
  }
};

// Function to update a news entry
const updateNews = async (newsId, data) => {
  const { newsTitle, newsDetail, newsDescription, newsLink, newsImageLinks } =
    data;

  try {
    // Update the News table
    const result = await db.query(
      `UPDATE News SET news_title = ?, news_detail = ?, news_description = ?, news_link = ? WHERE news_id = ?`,
      [newsTitle, newsDetail, newsDescription || null, newsLink || null, newsId]
    );

    if (result.affectedRows === 0) return false;

    // Update the NewsImages table
    if (newsImageLinks?.length > 0) {
      // Delete existing image links
      await db.query(`DELETE FROM NewsImages WHERE news_id = ?`, [newsId]);

      // Insert new image links
      const placeholders = newsImageLinks.map(() => "(?, ?)").join(", ");
      const values = newsImageLinks.flatMap((link) => [newsId, link]);

      await db.query(
        `INSERT INTO NewsImages (news_id, image_link) VALUES ${placeholders}`,
        values
      );
    }

    return true;
  } catch (err) {
    console.error("Error updating news:", err);
    throw new Error("Error updating news: " + err.message);
  }
};


// Function to delete a news entry
const deleteNews = async (newsId) => {
  try {
    const result = await db.query(`DELETE FROM News WHERE news_id = ?`, [
      newsId,
    ]);
    return result.affectedRows > 0;
  } catch (err) {
    console.error("Error deleting news:", err);
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

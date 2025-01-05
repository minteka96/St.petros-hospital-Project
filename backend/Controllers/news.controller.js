const newsService = require("../Services/news.service");

// Function to create a news entry
const createNews = async (req, res) => {
  try {
    const { news_title, news_detail, news_description, news_link } = req.body;

    if (!news_title || !news_detail || !news_description) {
      return res
        .status(400)
        .json({ error: "Title, detail, and description are required." });
    }

    const imageLinks = req.files
      ? req.files.map((file) => `/uploads/news/${file.filename}`)
      : [];
    const newsData = {
      newsTitle: news_title.trim(),
      newsDetail: news_detail.trim(),
      newsDescription: news_description.trim(),
      newsLink: news_link?.trim() || null,
      newsImageLinks: imageLinks,
    };

    const result = await newsService.createNews(newsData);
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const fullImageLinks = imageLinks.map((link) => `${baseUrl}${link}`);

    res
      .status(201)
      .json({
        message: "News created successfully",
        data: { ...result, newsImageLinks: fullImageLinks },
      });
  } catch (err) {
    console.error("Error creating news:", err);
    res.status(500).json({ error: err.message });
  }
};


// Function to retrieve a single news entry by ID
const getNewsById = async (req, res) => {
  try {
    const newsId = req.params.id;
    const news = await newsService.getNewsById(newsId);

    if (!news) {
      return res.status(404).json({ error: "News not found" });
    }

    // Generate absolute URLs for the image links
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const fullImageLinks = news.newsImageLinks.map(
      (link) => `${baseUrl}${link}`
    );

    res.status(200).json({
      data: {
        ...news,
        newsImageLinks: fullImageLinks,
      },
    });
  } catch (err) {
    console.error("Error fetching news by ID:", err);
    res.status(500).json({ error: err.message });
  }
};

// Function to retrieve all news entries
const getAllNews = async (req, res) => {
  try {
    const newsList = await newsService.getAllNews();

    // Generate absolute URLs for all image links
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const newsWithFullLinks = newsList.map((news) => ({
      ...news,
      newsImageLinks: news.newsImageLinks.map((link) => `${baseUrl}${link}`),
    }));

    res.status(200).json({
      status: "success",
      data: newsWithFullLinks,
    });
  } catch (err) {
    console.error("Error fetching all news:", err);
    res.status(500).json({ error: err.message });
  }
};

// Function to update a news entry
const updateNews = async (req, res) => {
  try {
    const newsId = req.params.id;
    const { news_title, news_detail, news_description, news_link } = req.body;

    if (
      !news_title?.trim() ||
      !news_detail?.trim() ||
      !news_description?.trim()
    ) {
      return res.status(400).json({
        error: "Title, detail, and description are required.",
      });
    }

    // Fetch existing news entry
    const existingNews = await newsService.getNewsById(newsId);
    if (!existingNews) {
      return res.status(404).json({ error: "News not found" });
    }

    // Handle new file uploads
    const newImageLinks = req.files
      ? req.files.map((file) => `/uploads/news/${file.filename}`)
      : [];

    // Combine existing images with new images
    const updatedImageLinks = newImageLinks.length
      ? [...existingNews.newsImageLinks, ...newImageLinks]
      : existingNews.newsImageLinks;

    // Prepare the updated data object
    const updatedData = {
      newsTitle: news_title.trim(),
      newsDetail: news_detail.trim(),
      newsDescription: news_description.trim(),
      newsLink: news_link?.trim() || existingNews.newsLink,
      newsImageLinks: updatedImageLinks,
    };

    const result = await newsService.updateNews(newsId, updatedData);

    if (!result) {
      return res.status(404).json({ error: "Failed to update news" });
    }

    // Generate absolute URLs for the updated image links
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const fullImageLinks = updatedImageLinks.map((link) => `${baseUrl}${link}`);

    res.status(200).json({
      status: "success",
      message: "News updated successfully",
      data: {
        ...updatedData,
        newsImageLinks: fullImageLinks,
      },
    });
  } catch (err) {
    console.error("Error updating news:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  // other functions...
  updateNews,
};


// Function to delete a news entry
const deleteNews = async (req, res) => {
  try {
    const newsId = req.params.id;

    // Attempt to delete the news entry
    const result = await newsService.deleteNews(newsId);

    if (!result) {
      return res.status(404).json({ error: "News not found" });
    }

    res.status(200).json({
      status: "success",
      message: "News deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting news:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createNews,
  getNewsById,
  getAllNews,
  updateNews,
  deleteNews,
};

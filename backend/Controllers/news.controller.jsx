const newsService = require("../Services/news.service.jsx");

const createNews = async (req, res) => {
  try {
    console.log(req.body); // Log request body to check structure
    const {
      news_title,
      news_detail,
      news_description,
      news_link,
      news_image_link,
    } = req.body;
    // Validate required fields
    if (!news_title || !news_detail) {
      return res
        .status(400)
        .json({ error: "Title and detail fields are required" });
    }
    const newsData = {
      newsTitle: news_title,
      newsDetail: news_detail,
      newsDescription: news_description,
      newsLink: news_link,
      newsImageLink: news_image_link,
    };
    const result = await newsService.createNews(newsData);
    res
      .status(201)
      .json({ message: "News created successfully", id: result.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getNewsById = async (req, res) => {
  try {
    const newsId = req.params.id;
    const news = await newsService.getNewsById(newsId);
    if (!news) {
      return res.status(404).json({ error: "News not found" });
    }
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllNews = async (req, res) => {
  try {
    const newsList = await newsService.getAllNews();
    res.status(200).json(newsList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateNews = async (req, res) => {
  try {
    const newsId = req.params.id;
    const {
      news_title,
      news_detail,
      news_description,
      news_link,
      news_image_link,
    } = req.body;
    const updatedData = {
      newsTitle: news_title,
      newsDetail: news_detail,
      newsDescription: news_description,
      newsLink: news_link,
      newsImageLink: news_image_link,
    };
    const result = await newsService.updateNews(newsId, updatedData);
    if (!result) {
      return res.status(404).json({ error: "News not found" });
    }
    res.status(200).json({ message: "News updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteNews = async (req, res) => {
  try {
    const newsId = req.params.id;
    const result = await newsService.deleteNews(newsId);
    if (!result) {
      return res.status(404).json({ error: "News not found" });
    }
    res.status(200).json({ message: "News deleted successfully" });
  } catch (err) {
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


const cpd_NewsService = require("../Services/cpd_news.service");

const createCpdNews = async (req, res) => {
  const { newsTitle, newsDescription, expiryDate } = req.body;

  if (!newsTitle || !newsDescription) {
    return res.status(400).json({ error: "Title and description are required" });
  }

  try {
    const news = await cpd_NewsService.createCpdNews({ newsTitle, newsDescription, expiryDate });
    return res.status(201).json(news);
  } catch (err) {
    console.error("Error creating CPD news:", err);
    return res.status(500).json({ error: "Internal Server Error" });

  }
};

const getCpdNewsById = async (req, res) => {
  try {
    const newsId = req.params.id;

    const news = await cpd_NewsService.getCpdNewsById(newsId);

    
    if (!news) {
      return res.status(404).json({ error: "CPD News not found" });
    }

    res.status(200).json({ data: news });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllCpdNews = async (req, res) => {
  try {

    const newsList = await cpd_NewsService.getAllCpdNews();

    
    if (!newsList) {
      return res.status(400).json({ error: "Failed to fetch CPD news entries!" });
    }

    res.status(200).json({
      status: "success",
      data: newsList
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCpdNews = async (req, res) => {
  try {
    const newsId = req.params.id;
    const { news_title, news_description, expiry_date } = req.body;

    if (!news_title || !news_description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    const existingNews = await cpd_NewsService.getCpdNewsById(newsId);

    if (!existingNews) {
      return res.status(404).json({ error: "CPD News not found" });
    }

    const updatedData = {
      newsTitle: news_title,
      newsDescription: news_description,
      expiryDate: expiry_date
    };

    const result = await cpd_NewsService.updateCpdNews(newsId, updatedData);


    if (!result) {
      return res.status(404).json({ error: "Failed to update CPD news" });
    }

    res.status(200).json({ 
      status: "success", 
      message: "CPD News updated successfully" 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCpdNews = async (req, res) => {
  try {
    const newsId = req.params.id;

    const result = await cpd_NewsService.deleteCpdNews(newsId);


    if (!result) {
      return res.status(404).json({ error: "CPD News not found" });
    }

    res.status(200).json({
      status: "success",
      message: "CPD News deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCpdNews,
  getCpdNewsById,
  getAllCpdNews,
  updateCpdNews,
  deleteCpdNews
};

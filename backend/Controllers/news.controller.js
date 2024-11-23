const newsService = require("../Services/news.service");

// Function to create a news entry
const createNews = async (req, res) => {
  try {
    // Extract data from the request body
    const { news_title, news_detail, news_description, news_link } = req.body;

    // Validate required fields
    if (!news_title || !news_detail) {
      return res
        .status(400)
        .json({ error: "News title and detail are required" });
    }

    // Get the file path for the uploaded image
    const news_image_link = req.files.news_image // Fixed field name here
      ? `/uploads/news/${req.files.news_image[0].filename}`
      : null;

    // Prepare data for the service
    const newsData = {
      newsTitle: news_title,
      newsDetail: news_detail,
      newsDescription: news_description,
      newsLink: news_link,
      newsImageLink: news_image_link,
    };

    // Call the service to save the news to the database
    const result = await newsService.createNews(newsData);

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    // Respond with success and the created news data
    res.status(201).json({
      message: "News created successfully",
      data: {
        id: result.id,
        ...newsData,
        newsImageLink: news_image_link ? `${baseUrl}${news_image_link}` : null,
      },
    });
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
  }
};

// Function to retrieve a single news entry by its ID
const getNewsById = async (req, res) => {
  try {
    // Extract the news ID from the request parameters
    const newsId = req.params.id;
    // Call the news service to fetch the news entry by ID
    const news = await newsService.getNewsById(newsId);
    // If the news entry is not found, return a 404 error
    if (!news) {
      return res.status(404).json({ error: "News not found" });
    }
    // Respond with the retrieved news data
    res.status(200).json({ data: news });
  } catch (err) {
    // Catch any errors and return a 500 error message
    res.status(500).json({ error: err.message });
  }
};

async function getAllNews(req, res, next) {
  try {
    // Call the getAllNews method from the news service
    const newsList = await newsService.getAllNews();
    if (!newsList) {
      res.status(400).json({
        error: "Failed to fetch news entries!",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: newsList,
      });
    }
  } catch (err) {
    // Catch any errors and return a 500 error message
    res.status(500).json({
      error: err.message,
    });
  }
}

// Function to update an existing news entry by its ID
const updateNews = async (req, res) => {
  try {
    // Extract the news ID from the request parameters
    const newsId = req.params.id;
    // Destructure the updated news data from the request body
    const {
      news_title,
      news_detail,
      news_description,
      news_link,
      // news_image_link,
    } = req.body;

    // Get the file path for the uploaded image
    const news_image_links = req.files.news_image // Fixed field name here
      ? `/uploads/news/${req.files.news_image[0].filename}`
      : null;

    // Prepare the updated news data
    const updatedData = {
      newsTitle: news_title,
      newsDetail: news_detail,
      newsDescription: news_description,
      newsLink: news_link,
      newsImageLink: news_image_links,
    };
    console.log("updatedData", updatedData);
    // Call the news service to update the news entry in the database
    const result = await newsService.updateNews(newsId, updatedData);
    // If the news entry is not found, return a 404 error
    if (!result) {
      return res.status(404).json({ error: "News not found" });
    }
    // Respond with a success message upon successful update
    res.status(200).json({
      status: "success",
      message: "News updated successfully",
    });
  } catch (err) {
    // Catch any errors and return a 500 error message
    res.status(500).json({ error: err.message },updatedData);
  }
};

// Function to delete a news entry by its ID
const deleteNews = async (req, res) => {
  try {
    // Extract the news ID from the request parameters
    const newsId = req.params.id;
    // Call the news service to delete the news entry from the database
    const result = await newsService.deleteNews(newsId);
    // If the news entry is not found, return a 404 error
    if (!result) {
      return res.status(404).json({ error: "News not found" });
    }
    // Respond with a success message upon successful deletion
    res.status(200).json({
      status: "success",
      message: "News deleted successfully",
    });
  } catch (err) {
    // Catch any errors and return a 500 error message
    res.status(500).json({ error: err.message });
  }
};

// Export all the functions to be used in other parts of the application
module.exports = {
  createNews,
  getNewsById,
  getAllNews,
  updateNews,
  deleteNews,
};

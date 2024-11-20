// Import the news service to handle database operations related to news
const newsService = require("../Services/news.service.jsx");

// Function to create a new news entry
const createNews = async (req, res) => {
  try {
    console.log(req.body); // Log the request body for debugging purposes (ensure it's properly structured)

    // Destructure the news data from the request body
    const {
      news_title,
      news_detail,
      news_description,
      news_link,
      news_image_link,
    } = req.body;

    // Validate that required fields (title and detail) are present
    if (!news_title || !news_detail) {
      return res
        .status(400)
        .json({ error: "Title and detail fields are required" }); // Respond with a validation error
    }

    // Prepare the data to be sent to the news service for creation
    const newsData = {
      newsTitle: news_title,
      newsDetail: news_detail,
      newsDescription: news_description,
      newsLink: news_link,
      newsImageLink: news_image_link,
    };

    // Call the news service to create the news entry in the database
    const result = await newsService.createNews(newsData);

    // Respond with a success message and the ID of the created news entry
    res.status(201).json({
      status: "success",
      message: "News created successfully",
      id: result.id,
    });
  } catch (err) {
    // Catch any errors during the process and respond with an error message
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

// Function to retrieve all news entries
// const getAllNews = async (req, res) => {
//   try {
//     // Call the news service to fetch all news entries
//     const newsList = await newsService.getAllNews();

//     // Respond with the list of news entries
//     res.status(200).json(newsList);
//   } catch (err) {
//     // Catch any errors and return a 500 error message
//     res.status(500).json({ error: err.message });
//   }
// };

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
      news_image_link,
    } = req.body;

    // Prepare the updated news data
    const updatedData = {
      newsTitle: news_title,
      newsDetail: news_detail,
      newsDescription: news_description,
      newsLink: news_link,
      newsImageLink: news_image_link,
    };

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
    res.status(500).json({ error: err.message });
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

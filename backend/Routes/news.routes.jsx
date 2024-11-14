// Importing the Express framework to handle routing and HTTP requests
const express = require("express");

// Creating a new router instance to define routes for the news API
const router = express.Router();

// Importing the news controller that handles the business logic for the news API routes
const newsController = require("../Controllers/news.controller.jsx");

// Importing authentication middleware to secure certain routes (though not used here)
const authenticate = require("../Middlewares/auth.middleware.jsx");

/**
 * This route allows the creation of a new news item. The request body must contain
 * the necessary data such as news title, details, and links.
 */
router.post("/news", newsController.createNews);

/**
 * This route fetches a single news entry by its unique ID from the database.
 * The news ID is passed as a parameter in the URL.
 */
router.get("/news/:id", newsController.getNewsById);

/**
 * This route fetches all the news entries stored in the database.
 * It returns a list of all news items.
 */
router.get("/news", newsController.getAllNews);

/**
 * This route allows updating a specific news entry identified by its ID.
 * The updated data should be provided in the request body.
 */
router.put("/news/:id", newsController.updateNews);

/**
 * This route deletes a specific news entry based on the news ID provided in the URL.
 */
router.delete("/news/:id", newsController.deleteNews);

// Exporting the router to be used in the main application file
module.exports = router;

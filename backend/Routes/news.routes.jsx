// Importing the Express framework to handle routing and HTTP requests
const express = require("express");
// Creating a new router instance to define routes for the news API
const router = express.Router();
// Importing the news controller that handles the business logic for the news API routes
const newsController = require("../Controllers/news.controller.jsx");
// Importing authentication middleware to secure certain routes (though not used here)
const authenticate = require("../Middlewares/auth.middleware.jsx");

router.post("/news", newsController.createNews);

router.get("/news/:id", newsController.getNewsById);

router.get("/news", newsController.getAllNews);

router.put("/news/:id", newsController.updateNews);

router.delete("/news/:id", newsController.deleteNews);
// Exporting the router to be used in the main application file
module.exports = router;

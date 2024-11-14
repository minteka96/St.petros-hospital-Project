const express = require("express");
const router = express.Router();
const newsController = require("../Controllers/news.controller.jsx");
const authenticate = require("../Middlewares/auth.middleware.jsx");

router.post("/news", newsController.createNews);
router.get("/news/:id", newsController.getNewsById);
router.get("/news", newsController.getAllNews);
router.put("/news/:id", newsController.updateNews);
router.delete("/news/:id", newsController.deleteNews);

module.exports = router;

// Import dependencies
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

const tenderRoutes = require("./Routes/tender.routes.js");
const newsRoutes = require("./Routes/news.routes.jsx");
const router = require("./Routes/index"); // Import the router
const healthTipRoutes = require("./Routes/healthtip.routes");
// CORS setup
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

// Create Express app
const app = express();
const port = process.env.PORT || 3000; // Fallback to port 3000 if process.env.PORT is not defined

// Middleware

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", tenderRoutes); // Use /api as the base path
app.use("/api", newsRoutes); // Use /api as the base path for news routes
app.use("/api", healthTipRoutes);
app.use("/", router); // If you have additional routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export the app for use in other parts of the application
module.exports = app;

// Import dependencies
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const tenderRoutes = require("./Routes/tender.routes")

// CORS setup
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};
<<<<<<< HEAD

// Create Express app
=======
// Create a variable to hold our port number
const port = process.env.PORT;
// Import the router
const router = require("./Routes/index");
// Import the path module
// Create the webserver
>>>>>>> 30274e53dde6f1d908267b649fe6fdd9b25d85a0
const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", tenderRoutes); // Use /api as the base path

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export the app for use in other parts of the application
module.exports = app;

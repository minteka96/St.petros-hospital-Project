// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the trainees sign-in controller
const traineesSignInController = require("../Controllers/traineesSignIn.controller");

// Create a route to handle the sign-in request via POST
router.post("/api/trainee/signin", traineesSignInController.signIn);

// Export the router
module.exports = router;

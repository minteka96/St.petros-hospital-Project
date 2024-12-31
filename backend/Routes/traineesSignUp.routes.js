const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/auth.middleware");

// Import the trainees controller
const traineesSignUpController = require("../Controllers/traineesSignUp.controller");

// Sign-up route
router.post("/api/trainee/signup", traineesSignUpController.signUp);

// Update trainee route (requires authentication)
router.put(
  "/api/trainee/:trainee_id",
  // authMiddleware, // Uncomment if authentication middleware is needed
  traineesSignUpController.updateTrainee
);

// Delete trainee route (requires authentication)
router.delete(
  "/api/trainee/:trainee_id",
  // authMiddleware, // Uncomment if authentication middleware is needed
  traineesSignUpController.deleteTrainee
);

// Fetch all trainees route (requires authentication)
router.get(
  "/api/trainees",
  // authMiddleware, // Uncomment if authentication middleware is needed
  traineesSignUpController.getAllTrainees
);

// Fetch trainee by email (optional authentication)
router.get(
  "/api/trainee",
  // authMiddleware, // Uncomment if authentication middleware is needed
  traineesSignUpController.getTraineeByEmail
);

// Fetch trainee by ID (optional authentication)
router.get(
  "/api/trainee/:trainee_id",
  // authMiddleware, // Uncomment if authentication middleware is needed
  traineesSignUpController.getTraineeById
);

// Export the router
module.exports = router;

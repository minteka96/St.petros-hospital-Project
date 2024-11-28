const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/auth.middleware");

const userController = require("../Controllers/user.controller");

// Route for creating a user
router.post("/api/user", userController.createUser);
router.get(
  "/api/users",
  [authMiddleware.verifyToken, authMiddleware.isAdmin],
  userController.getAllUsers
);
router.get("/api/user/:email",[authMiddleware.verifyToken, authMiddleware.isAdmin], userController.getUserByEmail);
router.get("/api/users/:id",[authMiddleware.verifyToken, authMiddleware.isAdmin], userController.getUserById);
router.put("/api/user/:id",[authMiddleware.verifyToken, authMiddleware.isAdmin], userController.updateUserById);
router.delete("/api/user/:id",[authMiddleware.verifyToken, authMiddleware.isAdmin], userController.deleteUserById);

module.exports = router;

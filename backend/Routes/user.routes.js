const express = require("express");
const router = express.Router();

const userController = require("../Controllers/user.controller");

// Route for creating a user
router.post("/api/user", userController.createUser);
router.get("/api/users", userController.getAllUsers);
router.get("/api/user/:email", userController.getUserByEmail);

module.exports = router;

// router.get("/api/user/:id", authMiddleware.verifyToken, userController.getUserById);
// router.put("/api/user/:id", authMiddleware.verifyToken, userController.updateUser);
// router.delete("/api/user/:id", authMiddleware.verifyToken, userController.deleteUser);
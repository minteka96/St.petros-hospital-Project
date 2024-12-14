const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/auth.middleware");

const userController = require("../Controllers/user.controller");

// Route for creating a user
router.post("/api/user", userController.createUser);
router.get(
  "/api/users",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin"]),
  ],
  userController.getAllUsers
);
router.get(
  "/api/user/:email",
  [authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin"]),],
  userController.getUserByEmail
);
router.get(
  "/api/users/:id",
  [authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin"]),],
  userController.getUserById
);
router.put(
  "/api/user/:id",
  [authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin"]),],
  userController.updateUserById
);
router.delete(
  "/api/user/:id",
  [authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin"]),],
  userController.deleteUserById
);

module.exports = router;

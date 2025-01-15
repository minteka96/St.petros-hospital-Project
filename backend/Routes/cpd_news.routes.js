const express = require("express");
const authMiddleware = require("../Middlewares/auth.middleware");
const cpdNewsController = require("../Controllers/cpd_news.controller");

const router = express.Router();

router.post(
  "/api/cpd-news",
  [
    authMiddleware.verifyToken,

    authMiddleware.checkRoles(["superadmin", "Admin", "CPD"])

  ],
  cpdNewsController.createCpdNews
);

router.get("/api/cpd-news/:id", cpdNewsController.getCpdNewsById);
router.get("/api/cpd-news", cpdNewsController.getAllCpdNews);

router.put(
  "/api/cpd_news/:id",
  // [
  //   authMiddleware.verifyToken,

  //   authMiddleware.checkRoles(["superadmin", "Admin", "CPD"])

  // ],
  cpdNewsController.updateCpdNews
);

router.delete(
  "/api/cpd-news/:id",
  [
    authMiddleware.verifyToken,

    authMiddleware.checkRoles(["superadmin", "Admin", "CPD"])

  ],
  cpdNewsController.deleteCpdNews
);

module.exports = router;

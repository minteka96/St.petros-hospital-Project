const express = require("express");
const router = express.Router();
const TraineesInfoController = require("../Controllers/trainees_info.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

router.post(
  "/api/trainees-info",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin"])
  ],
  TraineesInfoController.createTraineeInfo
);

router.get(
  "/api/trainees-info",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin"])
  ],
  TraineesInfoController.getAllTraineesInfo
);

router.get(
  "/api/trainees-info/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin"])
  ],
  TraineesInfoController.getTraineeInfoById
);

router.put(
  "/api/trainees-info/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin"])
  ],
  TraineesInfoController.updateTraineeInfo
);

router.delete(
  "/api/trainees-info/:id",
  [
    authMiddleware.verifyToken,
    authMiddleware.checkRoles(["superadmin", "Admin"])
  ],
  TraineesInfoController.deleteTraineeInfo
);

module.exports = router;

const express = require("express");
const authMiddleware = require("../Middlewares/auth.middleware");
const certificateController = require("../Controllers/certificate.controller");

const router = express.Router();

router.get("/api/certificate", certificateController.getcertificate);

module.exports = router;

const express = require("express");
const certificateController = require("../Controllers/certificate.controller");

const router = express.Router();

router.get("/api/certificate", certificateController.getcertificate);
router.get("/api/certificate/check/:id", certificateController.getById);

module.exports = router;

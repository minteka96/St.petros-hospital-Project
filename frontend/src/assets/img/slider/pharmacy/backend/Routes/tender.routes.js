const express = require("express");
const router = express.Router();
const tenderController = require("../Controllers/tender.controller");
const authenticate = require("../Middlewares/auth.middleware.jsx");


router.post("/tender",  tenderController.createTender);

module.exports = router;

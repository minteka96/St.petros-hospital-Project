const express = require("express");
const router = express.Router();
const vacanciesController = require("../Controllers/vacancies.controller");

router.post("/api/vacancy", vacanciesController.createVacancy);
router.get("/api/vacancy", vacanciesController.getAllJobs);
router.delete("/api/vacancy/:id", vacanciesController.deleteJobById);

module.exports = router;

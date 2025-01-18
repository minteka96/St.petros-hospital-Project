const trainCourseStatusService = require("../Services/trainCourseStatus.service");

async function getAllTrainingData(req, res) {
  try {
    const trainingData = await trainCourseStatusService.getAllTrainingData();
    res.status(200).json({ data: trainingData });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getTrainingDataById(req, res) {
  try {
    const trainingData = await trainCourseStatusService.getTrainingDataById(req.params.id);
    if (!trainingData) {
      return res.status(404).json({ error: "Training data not found" });
    }
    res.status(200).json({ data: trainingData });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAllTrainingData,
  getTrainingDataById
};

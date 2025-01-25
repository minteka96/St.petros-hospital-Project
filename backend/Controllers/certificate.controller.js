const path = require("path");
const traineesInfoService = require("../Services/trainees_info.service");

const getcertificate = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../public/", "certificate.png");
    ("../public/certificate.png");

    // Serve the certificate file
    res.sendFile(filePath);
  } catch (error) {
    console.error("Error serving certificate:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getById = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const traineeData = await traineesInfoService.TraineeInfoById(id);
    console.log(traineeData);
    if (traineeData) {
      res
        .status(200)
        .json({ success: true, isAvailable: true, data: traineeData });
    } else {
      res.status(404).json({
        success: false,
        isAvailable: false,
        message: "Certificate not found for the given ID.",
      });
    }
  } catch (error) {
    console.error("Error fetching trainee info:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
};

module.exports = {
  getcertificate,
  getById,
};

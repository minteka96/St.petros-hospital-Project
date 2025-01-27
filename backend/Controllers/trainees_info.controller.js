const traineesInfoService = require("../Services/trainees_info.service");

// async function createTraineeInfo(req, res) {
//   try {
//     const {
//       trainee_id,
//       first_name,
//       middle_name,
//       last_name,
//       sex,
//       phone,
//       profession,
//       account_number
//     } = req.body;

//     // Validate required fields
//     if (!trainee_id || !first_name || !last_name || !sex || !phone || !account_number) {
//       return res.status(400).json({ error: "Required fields are missing" });
//     }

//     const traineeInfoData = {
//       trainee_id,
//       first_name,
//       middle_name,
//       last_name,
//       sex,
//       phone,
//       profession,
//       account_number
//     };

//     await traineesInfoService.createTraineeInfo(traineeInfoData);
//     res.status(201).json({ message: "Trainee info created successfully", status: 201 });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

async function createTraineeInfo(req, res) {
  try {
    const {
      trainee_id,
      first_name,
      middle_name,
      last_name,
      sex,
      phone,
      profession,
      account_number,
    } = req.body;

    // Enhanced validation
    const requiredFields = {
      trainee_id,
      first_name,
      last_name,
      sex,
      phone,
      account_number,
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Required fields missing: ${missingFields.join(", ")}`,
      });
    }

    const traineeInfoData = {
      trainee_id,
      first_name,
      middle_name,
      last_name,
      sex,
      phone,
      profession,
      account_number,
    };

    const result = await traineesInfoService.createTraineeInfo(traineeInfoData);
    res.status(201).json({
      message: "Trainee info created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
}

async function getAllTraineesInfo(req, res) {
  try {
    const traineesInfo = await traineesInfoService.getAllTraineesInfo();
    res.status(200).json({ data: traineesInfo });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getTraineeInfoById(req, res) {
  try {
    const traineeInfo = await traineesInfoService.getTraineeInfoById(
      req.params.id
    );
    if (!traineeInfo) {
      return res.status(404).json({ error: "Trainee info not found" });
    }
    res.status(200).json({ data: traineeInfo });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getTraineeInfoByTraineeId(req, res) {
  try {
    const traineeInfo = await traineesInfoService.getTraineeInfoByTraineeId(
      req.params.traineeId
    );
    if (!traineeInfo) {
      return res.status(404).json({ error: "Trainee info not found" });
    }
    res.status(200).json({ data: traineeInfo });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateTraineeInfo(req, res) {
  try {
    const updatedTraineeInfo = await traineesInfoService.updateTraineeInfo(
      req.params.id,
      req.body
    );
    if (!updatedTraineeInfo) {
      return res.status(404).json({ error: "Trainee info not found" });
    }
    res.status(200).json({ data: updatedTraineeInfo });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteTraineeInfo(req, res) {
  try {
    const deleted = await traineesInfoService.deleteTraineeInfo(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Trainee info not found" });
    }
    res.status(200).json({ message: "Trainee info deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createTraineeInfo,
  getAllTraineesInfo,
  getTraineeInfoById,
  updateTraineeInfo,
  deleteTraineeInfo,
  getTraineeInfoByTraineeId,
};

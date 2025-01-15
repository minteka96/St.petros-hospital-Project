// const traineesSignUpService = require("../Services/traineesSignUp.service.js");
const traineesSignUpService = require("../Services/traineesSignUp.sevice.js");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

// Sign-up function
async function signUp(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Email and password are required",
      });
    }

    const traineeExists = await traineesSignUpService.checkIfTraineeExists(
      email
    );
    if (traineeExists) {
      return res.status(400).json({
        status: "fail",
        message: "A trainee with this email already exists.",
      });
    }

    const trainee = { email, password };
    const newTrainee = await traineesSignUpService.createTrainee(trainee);

    const token = jwt.sign(
      { trainee_id: newTrainee.trainee_id, email: newTrainee.email },
      jwtSecret,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      status: "success",
      message: "Trainee signed up successfully",
      data: { token, trainee: newTrainee },
    });
  } catch (error) {
    console.error("Sign-Up Error:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
}

// Update trainee function
async function updateTrainee(req, res) {
  try {
    const { trainee_id } = req.params;
    const updatedDetails = req.body;

    if (!trainee_id) {
      return res.status(400).json({
        status: "fail",
        message: "Trainee ID is required",
      });
    }

    const success = await traineesSignUpService.updateTraineeById(
      trainee_id,
      updatedDetails
    );

    if (!success) {
      return res.status(404).json({
        status: "fail",
        message: "Trainee not found or update failed",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Trainee updated successfully",
    });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
}

// Delete trainee function
async function deleteTrainee(req, res) {
  try {
    const { trainee_id } = req.params;

    if (!trainee_id) {
      return res.status(400).json({
        status: "fail",
        message: "Trainee ID is required",
      });
    }

    const success = await traineesSignUpService.deleteTraineeById(trainee_id);

    if (!success) {
      return res.status(404).json({
        status: "fail",
        message: "Trainee not found or deletion failed",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Trainee deleted successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
}

// Fetch all trainees function
async function getAllTrainees(req, res) {
  try {
    const trainees = await traineesSignUpService.getAllTrainees();

    if (!trainees.length) {
      return res.status(404).json({
        status: "fail",
        message: "No trainees found",
      });
    }

    res.status(200).json({
      status: "success",
      data: trainees,
    });
  } catch (error) {
    console.error("Get All Trainees Error:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
}

// Fetch trainee by email function
async function getTraineeByEmail(req, res) {
  try {
    const { trainee_email } = req.params;

    if (!trainee_email) {

      return res.status(400).json({
        status: "fail",
        message: "Email is required",
      });
    }

    const trainee = await traineesSignUpService.getTraineeByEmail(
      trainee_email
    );


    if (!trainee) {
      return res.status(404).json({
        status: "fail",
        message: "Trainee not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: trainee,
    });
  } catch (error) {
    console.error("Get Trainee By Email Error:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
}


// Fetch trainee by ID function
async function getTraineeById(req, res) {
  try {
    const { trainee_id } = req.params;

    if (!trainee_id) {
      return res.status(400).json({
        status: "fail",
        message: "Trainee ID is required",
      });
    }

    const trainee = await traineesSignUpService.getTraineeById(trainee_id);

    if (!trainee) {
      return res.status(404).json({
        status: "fail",
        message: "Trainee not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: trainee,
    });
  } catch (error) {
    console.error("Get Trainee By ID Error:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  signUp,
  updateTrainee,
  deleteTrainee,
  getAllTrainees,
  getTraineeByEmail,
  getTraineeById,
};

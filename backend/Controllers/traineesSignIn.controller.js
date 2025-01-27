const traineesSignInService = require("../Services/traineesSignIn.service");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    console.log(email);
    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Email and password are required",
      });
    }

    // Attempt login via service
    const signInResponse = await traineesSignInService.signIn({
      email,
      password,
    });
    console.log(signInResponse);
    if (signInResponse.status === "fail") {
      return res.status(403).json(signInResponse);
    }

    const trainee = signInResponse.data;

    // Generate JWT token upon successful sign-in
    const payload = {
      id: trainee.trainee_id,
      email: trainee.email,
    };

    // Set token expiration time (e.g., 24 hours)
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "24h" });

    return res.status(200).json({
      status: "success",
      message: "Trainee logged in successfully!",

      data: {
        token,
        trainee: {
          id: trainee.trainee_id,
          email: trainee.email,
        },
      },
    });
  } catch (error) {
    console.error("Sign-in Error:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
}

module.exports = { signIn };

const loginService = require("../Services/login.service");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

async function logIn(req, res) {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Email and password are required",
      });
    }

    // Attempt login via service
    const loginResponse = await loginService.logIn({ email, password });

    if (loginResponse.status === "fail") {
      return res.status(403).json(loginResponse);
    }

    // Generate JWT token upon successful login
    const user = loginResponse.data;

    // Check if the user is active
    if (!user.active_status) {
      return res.status(403).json({
        status: "fail",
        message: "Your account is inactive. Please contact support.",
      });
    }

    const payload = {
      id: user.user_id,
      username: user.username,
      email: user.email,
      role: user.role,
      privileges: user.privileges, // Include privileges in the token payload
    };

    console.log(payload);

    // Set token expiration time (e.g., 24 hours)
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "24h" });

    return res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      data: {
        token,
        user: {
          id: user.user_id,
          username: user.username,
          email: user.email,
          role: user.role,
          privileges: user.privileges,
        },
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
}

module.exports = { logIn };

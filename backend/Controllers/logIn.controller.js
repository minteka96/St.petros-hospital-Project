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

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      active_status: user.active_status
    };
    // set expiration time 1 minute
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "24h" });

    return res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      data: { token },
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

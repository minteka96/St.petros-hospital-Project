require("dotenv").config();
const jwt = require("jsonwebtoken");
// A function to verify the token received from the frontend

const userService = require("../Services/user.service");

// A function to verify the token received from the frontend
const verifyToken = async (req, res, next) => {
  // get token from localstorage
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      status: "fail",
      message: "No token provided!",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        status: "fail",
        message: "Unauthorized!",
      });
    }
    // console.log("Here is the decoded token");
    // console.log(decoded);
    req.email = decoded.email;
    next();
  });
};

const checkRoles = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const email = req.email;
      const user = await userService.getUserByEmail(email);

      if (!user || !user.active_status) {
        return res.status(403).send({
          status: "fail",
          message: "User not active or not found!",
        });
      }

      // Check if the user's role is in the allowedRoles array
      if (!allowedRoles.includes(user.role)) {
        return res.status(403).send({
          status: "fail",
          message: `Access denied for role: ${user.role}`,
        });
      }

      next();
    } catch (error) {
      console.error("Error checking roles:", error);
      return res.status(500).send({
        status: "error",
        message: "Internal server error",
      });
    }
  };
};


const authMiddleware = {
  verifyToken,
 
  checkRoles,
};

module.exports = authMiddleware;

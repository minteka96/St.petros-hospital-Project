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

// A function to check if the user is an admin
const isAdmin = async (req, res, next) => {
  const email = req.email;
  const user = await userService.getUserByEmail(email);
  if (user.role === "admin") {
    next();
  } else {
    return res.status(403).send({
      status: "fail",
      error: "Not an Admin!",
    });
  }
};
// A function to check if the user is a manager
const isManager = async (req, res, next) => {
  const email = req.email;
  const user = await userService.getUserByEmail(email);
  if (user.role === "manager") {
    next();
  } else {
    return res.status(403).send({
      status: "fail",
      error: "Not an manager"
    });
  }
};

const authMiddleware = {
  verifyToken,
  isAdmin,
  isManager,
};

module.exports = authMiddleware;

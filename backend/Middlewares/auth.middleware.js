require("dotenv").config();
const jwt = require("jsonwebtoken");
const userService = require("../Services/user.service");

const verifyTokenGeneric = (headerKey) => {
  return async (req, res, next) => {
    let token = req.headers[headerKey];
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
      req.email = decoded.email;
      next();
    });
  };
};

const verifyToken = verifyTokenGeneric("x-access-token");
const verifyTraineeToken = verifyTokenGeneric("y-access-token");

const verifyBothTokens = async (req, res, next) => {
  let adminToken = req.headers["x-access-token"];
  let traineeToken = req.headers["y-access-token"];

  if (!adminToken && !traineeToken) {
    return res.status(403).send({
      status: "fail",
      message: "No token provided!",
    });
  }

  const token = adminToken || traineeToken;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        status: "fail",
        message: "Unauthorized!",
      });
    }
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
  verifyTraineeToken,
  verifyBothTokens,
  checkRoles,
};

module.exports = authMiddleware;

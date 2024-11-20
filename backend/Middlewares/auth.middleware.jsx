const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers["x-api-key"];
  if (!token) return res.status(401).json({ error: "API key is required" });

  try {
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid API key" });
  }
};

module.exports = authenticate;


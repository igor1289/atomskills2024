const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.json({ message: "Unauthorized" });
  }
};

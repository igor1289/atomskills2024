//Dependencies
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth.js");

const { findUserByName, validatePassword } = require("../services/user.js");

//Controller actions
function create(req, res) {}
function update(req, res) {}

function login(req, res) {
  const user = findUserByName(req.body.name);

  if (user == undefined) {
    res.json({ message: "user not found" });
    return;
  }

  if (validatePassword(user, req.body.password)) {
    res.json({
      access_token: jwt.sign(
        { id: user.id, name: user.name },
        process.env.JWT_SECRET
      ),
    });
  } else {
    res.json({ message: "invalid password" });
  }
}

function logout(req, res) {}

function test(req, res) {
  res.json({ msg: "hello" });
}

//Router
router.get("/create", create);
router.put("/update", update);
router.post("/login", login);
router.get("/logout", logout);
router.get("/test", auth, test);

module.exports = router;

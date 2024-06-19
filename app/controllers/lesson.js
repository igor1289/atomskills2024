const { Router } = require("express");
const Error = require("../common/error.js");
const { validationResult } = require("express-validator");

//Сервисы
const lessonService = require("../services/lesson.js");
const authenticationService = require("../services/authentication.js");

//Middleware
const userMiddleware = require("../middleware/user.js");
const authenticationMiddleware = require("../middleware/authentication.js");

async function getAll(req, res) {
  res.json(await lessonService.getAllLesson());
}

async function getLessons(req, res) {
  if (req.params.topic_code) {
    const lesson = await lessonService.getLessons(req.params.topic_code.trim());

    if (lesson) {
      res.json(lesson);
    } else {
      res.status(404);
      res.end();
    }
  }
}

//Роутер
const router = Router();

router.get("/all", getAll);
router.get("/topic/:topic_code", getLessons);

module.exports = router;

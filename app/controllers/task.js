const {Router} = require("express");
const Error = require("../common/error.js");
const { validationResult } = require("express-validator");

//Сервисы
const taskService = require("../services/task.js");
const authenticationService = require("../services/authentication.js");

//Middleware
const userMiddleware = require("../middleware/user.js");
const authenticationMiddleware = require("../middleware/authentication.js")

async function getAll(req, res)
{
    res.json(await taskService.getAllTasks());
}

//Роутер
const router = Router();

router.get("/all", getAll);

module.exports = router;
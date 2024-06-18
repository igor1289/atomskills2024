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
    res.json(await taskService.getAll());
}

async function getLessonTaskList(req, res)
{
    if(req.params.topic_code && req.params.lesson_code)
        res.json(await taskService.getLessonTaskList(req.params.topic_code, req.params.lesson_code));
}

async function getTask(req, res)
{
    if(req.params.topic_code && req.params.lesson_code && req.params.task_code)
    {
        const task = await taskService.getTask(req.params.topic_code, req.params.lesson_code, req.params.task_code);
        
        if(task)
        {
            res.json(task);
        }else{
            res.status(404);
            res.end();
        }
    }
        
}

//Роутер
const router = Router();

router.get("/all", getAll);
router.get("/list/:topic_code/:lesson_code", getLessonTaskList);
router.get("/get/:topic_code/:lesson_code/:task_code", getTask);

module.exports = router;
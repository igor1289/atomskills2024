const {Router} = require("express");
const Result = require("../models/result");


async function getAll(req, res)
{
    Result.sync();
    res.json(await Result.findAll());
}

//Роутер
const router = Router();

router.get("/all", getAll);
// router.get("/list/:topic_code/:lesson_code", getLessonTaskList);
// router.get("/get/:topic_code/:lesson_code/:task_code", getTask);

module.exports = router;
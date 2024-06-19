const { Router } = require("express");
const Result = require("../models/result");
const Task = require("../models/task");
const User = require("../models/user");

async function getAll(req, res) {
  const results = await Result.findAll();

  const resultsTable = [];

  for (const result of results) {
    const task = await Task.findOne({ where: { code: result.task_code } });
    const student = await User.findByPk(result.student_id);
    const teacher = await User.findByPk(result.teacher_id);

    resultsTable.push({
      task: task.title,
      id: result.id,
      student: student.getFullName(),
      teacher: teacher.getFullName(),
      status: "-",
      score: "-",
      time: task.time,
      comment: result.comment,
    });
  }

  res.json(resultsTable);
}
async function byStudent(req, res) {
  const results = await Result.findAll({
    where: {
      student_id: req.params.student_id,
    },
  });

  const resultsTable = [];

  for (const result of results) {
    const task = await Task.findOne({ where: { code: result.task_code } });
    const student = await User.findByPk(result.student_id);
    const teacher = await User.findByPk(result.teacher_id);

    resultsTable.push({
      task: task.title,
      id: result.id,
      student: student.getFullName(),
      teacher: teacher.getFullName(),
      status: "-",
      score: "-",
      time: task.time,
      comment: result.comment,
    });
  }

  res.json(resultsTable);
}

async function getOne(req, res) {
  const results = await Result.findByPk(req.params.id);

  const resultsTable = [];

  //for (const result of results) {
  if (results) {
    const task = await Task.findOne({ where: { code: results.task_code } });
    const student = await User.findByPk(results.student_id);
    const teacher = await User.findByPk(results.teacher_id);

    resultsTable.push({
      task: task.code,
      student: student.getFullName(),
      teacher: teacher.getFullName(),
      status: "-",
      score: "-",
      time: task.time,
      comment: results.comment,
    });
  }

  res.json(resultsTable);
}

//Роутер
const router = Router();

router.get("/all", getAll);
router.get("/student/:student_id", byStudent);
router.get("/one/:id", getOne);
// router.get("/list/:topic_code/:lesson_code", getLessonTaskList);
// router.get("/get/:topic_code/:lesson_code/:task_code", getTask);

module.exports = router;

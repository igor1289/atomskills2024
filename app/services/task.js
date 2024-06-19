const Task = require("../models/task");

async function getAllTasks() {
  return await Task.findAll({ order: [["code", "ASC"]] });
}

async function getLessonTaskList(topic_code, lesson_code, withContent = false) {
  if (withContent) {
    const tasks = await Task.findAll({
      topic_code,
      lesson_code,
    });

    return tasks;
  } else {
    const tasks = await Task.findAll({
      where: {
        topic_code,
        lesson_code,
      },
      attributes: [
        "code",
        "topic_code",
        "lesson_code",
        "title",
        "difficulty",
        "time",
      ],
    });

    return tasks;
  }
}

async function getTask(topic_code, lesson_code, task_code) {
  const task = await Task.findOne({
    topic_code,
    lesson_code,
    code: task_code,
  });

  return task;
}

async function getTaskPK(task_code) {
  const task = await Task.findOne({
    where: {
      code: task_code,
    },
  });

  return task;
}

module.exports = {
  getAllTasks,
  getLessonTaskList,
  getTask,
  getTaskPK,
};

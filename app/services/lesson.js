const { Where } = require("sequelize/lib/utils");

const Lesson = require("../models/lesson");
const { where } = require("sequelize");

async function getAllLesson() {
  return await Lesson.findAll({ order: [["code", "ASC"]] });
}

async function getLesson(topic_code) {
  const task = await Lesson.findOne({
    where: {
      topic_code: topic_code,
    },
  });

  return task;
}

async function getLessons(topic_code) {
  const task = await Lesson.findAll({
    where: {
      topic_code: topic_code,
    },
  });

  return task;
}

module.exports = {
  getAllLesson,
  getLesson,
  getLessons,
};

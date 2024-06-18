const { Where } = require("sequelize/lib/utils");

const Lesson = require("../models/lesson");
const { where } = require("sequelize");

async function getAllLesson() {
  return await Lesson.findAll({ order: [["code", "ASC"]] });
}

module.exports = {
  getAllLesson,
};

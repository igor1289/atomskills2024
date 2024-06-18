const { Where } = require("sequelize/lib/utils");

const Task = require("../models/task");
const { where } = require("sequelize");

async function getAllTasks() {
  return await Task.findAll({ order: [["code", "ASC"]] });
}

module.exports = {
  getAllTasks,
};

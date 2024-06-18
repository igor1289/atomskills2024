const { Where } = require("sequelize/lib/utils");

const Topic = require("../models/topic");
const { where } = require("sequelize");

async function getAllTopic() {
  return await Topic.findAll({ order: [["code", "ASC"]] });
}

module.exports = {
  getAllTopic,
};

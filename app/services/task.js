const Task = require("../models/task");

async function getAllTasks()
{
    return await Task.findAll();
}

module.exports = {
    getAllTasks
};
const User = require("../models/user.js")
const fs = require("fs");
const path = require("path");
const sequelize = require("../common/sequelize.js");
const initialLoading = require("./initialLoading.js");
const Task = require("../models/task.js");
const Lesson = require("../models/lesson.js");

async function createDefaultUser()
{
    const admin = User.build();
    admin.name = "admin";
    await admin.setPassword("admin");
    admin.isAdmin = true;
    admin.isTeacher = false;
    admin.firstName = "admin";
    admin.lastName = "admin";
    admin.fatherName = "admin";
    admin.email = "admin@admin.com";
    admin.tel = "000";
    await admin.save();


    const teacher = User.build();
    teacher.name = "teacher";
    await teacher.setPassword("teacher");
    teacher.isAdmin = false;
    teacher.isTeacher = true;
    teacher.firstName = "teacher";
    teacher.lastName = "teacher";
    teacher.fatherName = "teacher";
    teacher.email = "teacher@teacher.com";
    teacher.tel = "000";
    await teacher.save();

    const student = User.build();
    student.name = "student";
    await student.setPassword("student");
    student.isAdmin = false;
    student.isTeacher = false;
    student.firstName = "student";
    student.lastName = "student";
    student.fatherName = "student";
    student.email = "student@student.com";
    student.tel = "000";
    await teacher.save();


    console.log("Пользователи по умолчанию созданы");
}

async function syncModels()
{
    const models = fs.readdirSync(path.resolve("app/models"));

    models.forEach(modelFile => {
        try {
            const model = require(path.resolve("app/models/" + modelFile));
        } catch (error) {
            console.log(`Не удалось синхронизировать ${modelFile}`)
            console.log(error)
        }
    });

    sequelize.sync({alter: true})
}

async function needDeploy()
{
    try {
        const usersCount = await User.count();
        return false;
    } catch (error) {
        return true;
    }
}

async function deploy()
{
    //Если таблица пользователей пуста, то создаётся пользователь admin с паролем admin
    const usersCount = await User.count();

    if(usersCount == 0)
        createDefaultUser();

    initialLoading.load();
}

module.exports = {
    syncModels,
    deploy
};
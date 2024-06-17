const User = require("../models/user.js")
const fs = require("fs");
const path = require("path");
const sequelize = require("../common/sequelize.js");
const initialLoading = require("./initialLoading.js");

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
    console.log("Пользователь по умолчанию создан");
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
    await syncModels();

    if(await needDeploy())
        sequelize.sync({force: true});

    //Если таблица пользователей пуста, то создаётся пользователь admin с паролем admin
    const usersCount = await User.count();

    if(usersCount == 0)
        createDefaultUser();

    initialLoading.load();
}

module.exports = deploy;
const User = require("../models/user.js")

async function createDefaultUser()
{
    const admin = User.build();
    admin.name = "admin";
    await admin.setPassword("admin");
    admin.isAdmin = true;
    await admin.save();
    console.log("Пользователь по умолчанию создан");
}

async function deploy()
{
    //Если таблица пользователей пуста, то создаётся пользователь admin с паролем admin
    const usersCount = await User.count();

    if(usersCount == 0)
        createDefaultUser();
}

module.exports = deploy;
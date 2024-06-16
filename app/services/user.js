const User = require("../models/user.js");

async function findByName(name)
{
    return await User.findOne({
        where: {
            name: name
        }
    });
}

async function findById(id)
{
    return await User.findByPk(id);
}

async function create(data)
{
    const newUser = User.build(data);
    await newUser.setPassword(data.password);
    await newUser.save();
    return newUser;
}

module.exports = {
    findById,
    findByName,
    create
}
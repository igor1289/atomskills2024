const fs = require("fs");
const path = require("path");
const File = require("../models/file");
const FileMap = require("../models/file_map");
const sequelize = require("../common/sequelize");

async function createFile(fileData, owner)
{

    const file = await File.build(fileData);
    await file.setStoragePath();
    await file.save();

    const fileMap = await FileMap.create({
        file_id: file.id,
        owner_type: owner.type,
        owner_code: owner.code
    });

    fileMap.save();

    return file;
}

module.exports = {
    createFile
};
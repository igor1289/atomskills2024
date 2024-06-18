const fs = require("fs");
const path = require("path");
const File = require("../models/file");
const FileMap = require("../models/file_map");
const sequelize = require("../common/sequelize");

async function createFile(fileData, owner)
{

    const file = await File.build(fileData);
    await file.prepare();
    await file.save();

    const fileMap = await FileMap.create({
        file_id: file.id,
        file_name: file.name,
        owner_type: owner.type,
        owner_code: owner.code
    });

    fileMap.save();

    return file;
}

async function getFile(owner_type, owner_code, name)
{
    const fileMap = await FileMap.findOne({
        where: {
            owner_type: owner_type,
            owner_code: owner_code,
            file_name: name,
        }
    });

    if(fileMap)
        return await File.findByPk(fileMap.file_id);
}

module.exports = {
    createFile,
    getFile
};
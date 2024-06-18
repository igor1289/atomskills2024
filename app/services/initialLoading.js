const fs = require("fs");
const path = require("path");

const Trait = require("../models/trait.js");
const Topic = require("../models/topic.js");
const Lesson = require("../models/lesson.js");
const Task = require("../models/task.js");
const File = require("../models/file.js");

const TraitMap = require("../models/trait_map.js");
const FileMap = require("../models/file_map.js");

const sequelize = require("../common/sequelize.js");
const { where } = require("sequelize");
const fileService = require("./file.js");


const lessonsDataPath = path.resolve("app/data/lessons");
const dataPath = path.resolve("app/data");
const topicsStoragePath = path.resolve("app/storage/topics");

function loadTraits()
{
    const traitsFilePath = path.resolve(dataPath + "/" + "traits.json");
    const traitsFile = fs.readFileSync(traitsFilePath);

    try {
        const traits = JSON.parse(traitsFile);

        traits.forEach(async traitData => {
            let trait = await Trait.findByPk(traitData.code);
        
            if(!trait)
            {
                Trait.create(traitData);
            }else{
                await trait.update(traitData)
            }
        });

    } catch (error) {
        console.log(`Не удалось загрузить файл ${traitsFilePath}`);
    }
}




async function loadTopics()
{    
    const files = fs.readdirSync(lessonsDataPath);
    
    const topicFiles = files.filter(file => file.startsWith("topic") && file.trim().endsWith(".json"));
    
    for (const topicFile of topicFiles) {
        let topicData = undefined;
        
        try {
            topicFileContent = fs.readFileSync(path.resolve(lessonsDataPath + "/" + topicFile));
            topicData = await JSON.parse(topicFileContent);
            
        } catch (error) {
            console.log(`Не удалось прочитать файл ${topicFile}`);
            console.log(error);
            continue;
        }
        
        loadTopic(topicData);
    }
}

async function loadTopic(topicData)
{
    const t = await sequelize.transaction();

    try {
        let topic = await Topic.findByPk(topicData.code);

        if(!topic)
        {
            topic = Topic.build(topicData);
            await topic.save()
        }else{
            await topic.update(topicData)
        }

        topicData.traits.forEach(async traitCode => {
            await TraitMap.findOrCreate({
                where: {
                    trait_code: traitCode,
                    owner_code: topicData.code
                },
                defaults: {
                    trait_code: traitCode,
                    owner_code: topicData.code,
                    owner_type: 'topic'
                }
            })
        });

        const lessons = loadLessons(topicData);
    
        lessons.forEach(lessonData => {
            loadLesson(lessonData, topicData);
        });

        t.commit();

    } catch (error) {
        t.rollback();
    }


}

function loadLessons(topicData)
{
    const lessons = [];
    
    for (const lesson of topicData.lessons) {
        const lessonPath = path.resolve(lessonsDataPath + "/" + lesson);
        const lessonFilePath = path.resolve(lessonPath + "/" + lesson + ".json");
        
        try {
            lessonFileContent = fs.readFileSync(lessonFilePath);
            lessonData = JSON.parse(lessonFileContent);
            lessons.push(lessonData);
            
        } catch (error) {
            console.log(`Не удалось прочитать файл ${lessonFilePath}`);
            console.log(error);
            continue;
        }
    }
    
    return lessons;
}

async function loadLesson(lessonData, topicData)
{
    let lesson = await Lesson.findOne({
        where: {
            code: lessonData.code,
            topic_code: topicData.code
        }
    });

    if(!lesson)
    {
        lesson = Lesson.build(lessonData);
        lesson.topic_code = topicData.code;
        lesson.save();
    }else{
        await lesson.update(lessonData)
    }

    const tasks = await loadTasks(lessonData);

    tasks.forEach(async taskData => {
        await loadTask(taskData, lessonData);
    });

    lessonData.supplement.forEach(async fileData => {
        const file = await fileService.createFile({name: fileData.file, title: fileData.title}, {
            type: "lesson",
            code: lessonData.code
        });

        fs.copyFileSync(path.resolve(lessonsDataPath + "/" + lessonData.code + "/" + fileData.file), file.getFullPath());
    })

    lessonData.traits.forEach(async traitCode => {
        await TraitMap.findOrCreate({
            where: {
                trait_code: traitCode,
                owner_code: lessonData.code
            },
            defaults: {
                trait_code: traitCode,
                owner_code: lessonData.code,
                owner_type: 'lesson'
            }
        })
    });
}

async function loadTasks(lessonData)
{
    const tasks = [];
    
    for (const task of lessonData.tasks) {
        const taskPath = path.resolve(lessonsDataPath + "/" + task);
        const taskFilePath = path.resolve(taskPath + "/" + task + ".json");
        
        try {
            const taskFileContent = fs.readFileSync(taskFilePath);
            const taskData = JSON.parse(taskFileContent);
            tasks.push(taskData);
            
        } catch (error) {
            console.log(`Не удалось прочитать файл ${taskFilePath}`);
            console.log(error);
            continue;
        }
    }
    
    return tasks;
}

async function loadTask(taskData, lessonData)
{
    let task = await Task.findOne({
        where: {
            code: taskData.code,
            lesson_code: lessonData.code
        }
    });

    if(!task)
    {
        task = Task.build(taskData);
        task.lesson_code = lessonData.code;
        task.save();
    }else{
        await task.update(taskData)
    }

    taskData.supplement.forEach(async fileData => {
        const file = await fileService.createFile({name: fileData.file, title: fileData.title}, {
            type: "task",
            code: taskData.code
        });

        fs.copyFileSync(path.resolve(lessonsDataPath + "/" + taskData.code + "/" + fileData.file), file.getFullPath());
    })
}

function load()
{
    if(needInitialLoading())
    {        
        loadTraits();
        loadTopics();
        initialLoadingComplete();
    }
}

function needInitialLoading()
{
    return !fs.existsSync(path.resolve(dataPath + "/" + "loaded"))
}

function initialLoadingComplete()
{
    fs.writeFileSync(path.resolve(dataPath + "/" + "loaded"), "ok");
}

module.exports = {
    load
}
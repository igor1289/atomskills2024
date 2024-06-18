//Чтение конфигурационного файла
require("dotenv").config();

const { PORT, HOST } = process.env;

//Подключение к базе данных
const sequelize = require("./common/sequelize");

//Проверка на необходимость развертывания
const deploy = require("./services/deploy.js");
deploy();

//Создание экземпляра express
const express = require("express");

const app = express();

//Дополнительная настройка
app.use(express.json());
app.use(express.static("./app/views"));
app.use("/public", express.static("./public/"));

//Контроллеры
app.use("/user", require("./controllers/user.js"));
app.use("/file", require("./controllers/file.js"));
app.use("/task", require("./controllers/task.js"));
app.use("/lesson", require("./controllers/lesson.js"));
app.use("/topic", require("./controllers/topic.js"));

//Запуск
app.listen(PORT, HOST, () => {
  console.log("Приложение запущено");
});

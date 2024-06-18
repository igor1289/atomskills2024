const {Router} = require("express");
const Error = require("../common/error.js");
const { validationResult } = require("express-validator");

//Сервисы
const fileService = require("../services/user.js");
const authenticationService = require("../services/authentication.js");

//Middleware
const userMiddleware = require("../middleware/user.js");
const authenticationMiddleware = require("../middleware/authentication.js")

async function get(req, res)
{
    
}

//Роутер
const router = Router();

router.get("/get/:owner_type/:owner_code/:name", get);

module.exports = router;
const {Router} = require("express");
const Error = require("../common/error.js");
const { validationResult } = require("express-validator");

//Сервисы
const fileService = require("../services/file.js");
const authenticationService = require("../services/authentication.js");

//Middleware
const userMiddleware = require("../middleware/user.js");
const authenticationMiddleware = require("../middleware/authentication.js")

async function get(req, res)
{
    let file;

    if(req.params.owner_type && req.params.owner_code && req.params.name)
    {
        file = await fileService.getFile(req.params.owner_type, req.params.owner_code, req.params.name);

        if(file)
        {
            res.sendFile(file.getFullPath());
        }else{
            res.status(404);
            res.end();
        }
        

    }else{
        res.status(400);
        res.end();
    }
}

//Роутер
const router = Router();

router.get("/get/:owner_type/:owner_code/:name", get);

module.exports = router;
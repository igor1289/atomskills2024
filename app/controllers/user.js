const {Router} = require("express");
const Error = require("../common/error.js");
const { validationResult } = require("express-validator");

//Сервисы
const userService = require("../services/user.js");
const authenticationService = require("../services/authentication.js");

//Middleware
const userMiddleware = require("../middleware/user.js");
const authenticationMiddleware = require("../middleware/authentication.js")

async function create(req, res)
{
    const validation = validationResult(req);

    if(validation.isEmpty())
    {
        if(!await userService.findByName(req.body.name))
        {
            const newUser = await userService.create(req.body);

            if(newUser.isAdmin || newUser.isTeacher)
            {
                //Проверка пользователя на функционал администратора... потом
            }

            res.status(200);
            res.json({id: newUser.id});
        }else{
            res.status(409);
            res.json(new Error("Пользователь уже существует"))
        }
    }else{
        res.status(400);
        res.json(new Error("Ошибка в параметрах запроса", "", validation));
    }
}

async function login(req, res)
{
    const validation = validationResult(req);

    if(validation.isEmpty())
    {
        const user = await userService.findByName(req.body.name);

        if(user)
        {
            if(await user.verifyPassword(req.body.password))
            {
                res.json({
                    access_token: authenticationService.signUserAccessToken(user), 
                    user_id: user.id,
                    user_name: user.getFullName()
                });
            }else{
                res.status(400);
                res.json(new Error("Неверный пароль", ""));
            }
        }else{
            res.status(404);
            res.json(new Error("Пользователь не найден", ""));
        }
            
    }else{
        res.status(400);
        res.json(new Error("Ошибка в параметрах запроса", "", validation)); 
    }
}

async function auth_test(req, res)
{
    res.status(200);
    res.json({success: true});
}

//Роутер
const router = Router();

router.post("/create", ...userMiddleware.create, create);
router.post("/login", ...userMiddleware.login, login);
router.post("/auth_test", authenticationMiddleware, auth_test);

module.exports = router;
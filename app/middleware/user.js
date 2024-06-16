const { body } = require("express-validator");

const create = [
        body(["password", "name"]).trim().isString().notEmpty(),
        // body('isAdmin').default(false),
        // body('isTeacher').default(false),
    ];

const login = [
    body(['name', "password"]).trim().isString().notEmpty()
]

module.exports = {
    create: create,
    login: login
}
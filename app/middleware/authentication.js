const { authenticate } = require("../services/authentication")

module.exports = (req, res, next) =>
{
    if(authenticate(req))
    {
        next();
    }else
    {
        res.status(401);
        res.end();
    }
}
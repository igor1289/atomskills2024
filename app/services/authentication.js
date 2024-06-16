const jwt = require("jsonwebtoken");

const JWT_AUTH_SECRET = process.env.JWT_AUTH_SECRET;

function authenticate(req)
{
    return getRequestPayload(req) != undefined;
}

function signUserAccessToken(user)
{
    const payload = user.getPayload();

    try {
        return jwt.sign(payload, JWT_AUTH_SECRET)
    } catch (error) {
        throw error;
    }
}

function getRequestAccessToken(req)
{
    const bearerToken = req.headers.authorization;

    if(bearerToken)
        return bearerToken.split(' ')[1];
}

function getRequestPayload(req)
{
    const token = getRequestAccessToken(req);

    if(!token)
        return undefined;


    try {
        return jwt.verify(token, JWT_AUTH_SECRET); 
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

module.exports = {
    authenticate,
    signUserAccessToken,
    getRequestAccessToken
}
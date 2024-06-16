class Error
{
    constructor(message = "", code = "", data = undefined)
    {
        this.isError = true;
        this.message = message;
        this.code = code;
        this.data = data
    }
}

module.exports = Error;
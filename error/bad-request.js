const CustomAPIError = require("./custom-error");
class badRequest extends CustomAPIError{
    constructor(message){
        super(message);
        this.statusCode = 401;
    };
}

module.exports = badRequest;
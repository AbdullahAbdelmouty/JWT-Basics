const CustomAPIError = require("./custom-error");
class unauthenticated extends CustomAPIError{
    constructor(message){
        super(message);
        this.statusCode = 400;
    };
}

module.exports = unauthenticated;
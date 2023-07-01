const CustomAPIError = require("./custom-error");
const badRequest = require("./unauthenticated");
const unauthenticated = require("./unauthenticated");

module.exports = {
    CustomAPIError,
    badRequest,
    unauthenticated
}
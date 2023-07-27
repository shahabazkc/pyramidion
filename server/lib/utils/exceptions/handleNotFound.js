const HttpException = require("./http.exception");
const httpStatus = require("http-status");

function handleNotFound(req, res, next) {
    return next(new HttpException(httpStatus.NOT_FOUND, 'Not found'));
}

module.exports = handleNotFound;
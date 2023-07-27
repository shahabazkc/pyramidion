const mongoose = require("mongoose");
const httpStatus = require("http-status");
const httpErrors = require("http-errors");
const {  isCelebrateError } = require("celebrate");
const HttpException = require("../utils/exceptions/http.exception");

function handleCelebrateError(err) {
    let errorBody;

    // 'details' is a Map()
    if (err.details.has("body")) {
        errorBody = err.details.get("body");
    } else if (err.details.has("params")) {
        errorBody = err.details.get("params");
    } else if (err.details.has("query")) {
        errorBody = err.details.get("query");
    } else {
        console.error("default validation error");
    }

    if (errorBody?.details?.[0]?.message) {
        const httpErr = httpErrors(httpStatus.BAD_REQUEST, `${errorBody?.details?.[0]?.message.toString()}`);
        return httpErr;
    }
    else {
        const httpErr = httpErrors(httpStatus.BAD_REQUEST, "Bad request parameters");
        return httpErr;
    }
}


const errorConverter = (err, req, res, next) => {
    let error = err;
    if (!(error instanceof HttpException)) {
        if (isCelebrateError(error)) {
            error = handleCelebrateError(error);
        } else {
            const statusCode =
                error.statusCode || error instanceof mongoose.Error
                    ? httpStatus.BAD_REQUEST
                    : httpStatus.INTERNAL_SERVER_ERROR;
            const message = error.message || httpStatus[statusCode];
            error = new HttpException(statusCode, message);
        }
    }
    next(error);
};

module.exports = errorConverter;
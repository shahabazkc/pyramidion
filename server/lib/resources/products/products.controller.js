const httpStatus = require('http-status');
const HttpException = require('../../utils/exceptions/http.exception');
const PasswordBuilder = require('./products.builder');
const resultService = require('../../services/products.service');

module.exports = {
    checkPassword: async (req, res, next) => {
        try {
            const { password } = req.body;
            const pass = new PasswordBuilder(password);
            const result = pass.validate().getResult();

            try {
                await resultService.addResult('password', password, result)
            } catch (error) {
                console.log("Failed to store in Db");
                console.log(error);
                return next(new HttpException(httpStatus.INTERNAL_SERVER_ERROR,'Internal Server Error'));
            }

            return res.json({
                status: true,
                data: {
                    requiredChanges: result
                },
                message: "Process completed"
            });

        } catch (error) {
            return next(new HttpException(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error'));
        }

    }
}
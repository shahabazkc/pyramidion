const { celebrate, Joi } = require('celebrate');

module.exports = {
    checkPassword:  celebrate({
        body: Joi.object({
            password: Joi.string().required().messages({
                'any.required': 'password should be exist',
                'string.empty': 'password should not be empty'
            }),
        })
    })
}
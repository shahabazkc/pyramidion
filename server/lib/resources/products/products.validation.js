const { celebrate, Joi } = require('celebrate');

module.exports = {
    createProduct:  celebrate({
        body: Joi.object({
            name: Joi.string().min(5).required().messages({
                'any.required': 'name should be exist',
                'string.empty': 'name should not be empty'
            }),
            category: Joi.string().min(4).required().messages({
                'any.required': 'category should be exist',
                'string.empty': 'category should not be empty'
            }),
            description: Joi.string().min(20).required().messages({
                'any.required': 'description should be exist',
                'string.empty': 'description should not be empty'
            }),
            short_description: Joi.string().min(12).required().messages({
                'any.required': 'short_description should be exist',
                'string.empty': 'short_description should not be empty'
            }),
            seller: Joi.string().min(4).required().messages({
                'any.required': 'seller should be exist',
                'string.empty': 'seller should not be empty'
            }),
            price: Joi.number().min(100).required().messages({
                'any.required': 'price should be exist',
                'string.empty': 'price should not be empty'
            })
        })
    }),
    getProduct: celebrate({
        params: Joi.object({
            id: Joi.string().min(24).max(24).message('Id should be valid mongoId')
        })
    })
}
const ResultModel = require('../models/product.model');

module.exports = {
    async createProduct(productData) {
        const result = new ResultModel(productData);
        try {
            await result.save();
        } catch (error) {
            throw error
        }
    }
}
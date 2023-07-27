const ProductModel = require('../models/product.model');

module.exports = {
    async createProduct(productData) {
        const product = new ProductModel(productData);
        try {
            await product.save();
            return product;
        } catch (error) {
            throw error
        }
    },
    async getProducts() {
        return await ProductModel.find({}, { name: 1, category: 1, short_description: 1, price: 1 })
    },
    async getProduct(id) {
        return await ProductModel.findOne({ _id: id });
    }
}
const httpStatus = require('http-status');
const HttpException = require('../../utils/exceptions/http.exception');
const ProductBuilder = require('./products.builder');
const productService = require('../../services/products.service');

module.exports = {
    createProduct: async (req, res, next) => {
        try {
            const productData = req.body;
            try {
                const product = new ProductBuilder(productData).validate();
                let createdProd = await productService.createProduct(product);

                return res.json({
                    status: true,
                    mesage: "product created Succesfully",
                    data: createdProd
                })
            } catch (error) {
                return res.status(httpStatus.BAD_REQUEST).json({
                    status: false,
                    message: error.message
                })
            }
        } catch (error) {
            return next(new HttpException(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error'));
        }

    },
    getProducts: async (req, res, next) => {
        try {
            const products = await productService.getProducts();
            return res.status(200).json({
                status: true,
                data: products
            })
        } catch (error) {
            return next(new HttpException(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error'));

        }
    },
    getProductData: async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await productService.getProduct(id);
            return res.status(200).json({
                status: true,
                data: product
            })
        } catch (error) {
            console.log(error);
            return next(new HttpException(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error'));

        }
    }
}
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const errorConverter = require('./middlewares/error.converter');
const errorMiddleware = require('./middlewares/error.middleware');
const productsRouter = require('./resources/products/products.router');
const handleNotFound = require('./utils/exceptions/handleNotFound');

function initiliaseMiddlewares() {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({ origin: true, credentials: true }));
    app.use(morgan('dev'));
    app.use(compression());
    app.use(helmet());
}

function initiliaseRouters() {
    app.use('/api/products', productsRouter);
};

function initliaseErrorHandlers() {
    app.use(errorConverter);
    app.use(errorMiddleware);
}

function intiliaseInvalidRequestHandler() {
    app.use(handleNotFound);
}


app.intiliaseInvalidRequestHandler = intiliaseInvalidRequestHandler;
app.initliaseErrorHandlers = initliaseErrorHandlers;
app.initiliaseRouters = initiliaseRouters;
app.initiliaseMiddlewares = initiliaseMiddlewares;

module.exports = app;
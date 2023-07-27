require('dotenv').config();
const app = require('./lib/app');
const Database = require('./lib/db/mongo.interface');
const validateEnv = require('./lib/utils/validateEnv');

const startServer = () => {
    validateEnv()
    app.initiliaseMiddlewares();
    app.initiliaseRouters();
    app.intiliaseInvalidRequestHandler()
    app.initliaseErrorHandlers()

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, async () => {
        console.log(`Server Started on port: ${PORT}`);
        const db = new Database({
            mongoUri: process.env.MONGO_URI,
            port: process.env.MONGO_PORT,
            host: process.env.MONGO_HOST,
            name: process.env.MONGO_DB_NAME
        });
        await db.connect();
    });
};


startServer()
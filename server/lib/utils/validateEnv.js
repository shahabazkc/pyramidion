const { cleanEnv, str, port } = require('envalid');

function validateEnv() {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production', 'test'],
            default: 'development'
        }),
        MONGO_URI: str(),
        PORT: port({ default: 3000 }),
    });
}

module.exports = validateEnv;

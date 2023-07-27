const mongoose = require('mongoose');

class Database {
    mongoose = mongoose;
    dbData = {
        mongoUri: "",
        port: "",
        host: "",
        name: "",
        opts: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    };

    constructor(dbData = {
        mongoUri: "",
        port,
        host,
        name: "",
        opts: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    }) {
        if (Database.instance) {
            throw new Error('Database class already intiliazed')
        }
        else {
            Database.instance = this;
            this.dbData = dbData;
        }
    };

    async connect() {
        try {
            console.log("Connecting to database");
            if (this.dbData.mongoUri) {
                await this.mongoose.connect(this.dbData.mongoUri, this.dbData.opts);
            } else {
                await this.mongoose.connect(
                    `mongodb://${this.dbData.host}:${this.dbData.port}/${this.dbData.name}?readPreference=primary&appname=pp_server&ssl=false`,
                    this.dbData.opts
                );
            }
            console.log("Connected to database");
            return Promise.resolve();
        } catch (error) {
            console.info("Failed to connect with database");
            console.log(error);
            throw new Error("Failed to connect to database");
        }
    }

    async disconnect() {
        console.info("Disconnecting from database");
        await this.mongoose.disconnect();
    }
}

module.exports = Database

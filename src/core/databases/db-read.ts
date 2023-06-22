import * as mongoose from "mongoose";
import {config} from "../../config";

export const mongooseConnection = mongoose.connect(`mongodb://${config.READ_HOST}:${config.READ_PORT}`, {
    dbName: config.READ_DATABASE,
    auth: {
        username: config.READ_USERNAME,
        password: config.READ_PASSWORD
    }
});
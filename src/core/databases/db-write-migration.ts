import {DataSource} from "typeorm";
import {config} from "../../config";

const options: any = {
    type: config.WRITE_TYPE_DATABASE,
    host: config.WRITE_HOST_MIGRATION,
    port: config.WRITE_PORT,
    username: config.WRITE_USERNAME,
    password: config.WRITE_PASSWORD,
    database: config.WRITE_DATABASE,
    synchronize: false,
    dropSchema: false,
    logging: config.WRITE_LOGGING,
    entities: ["./src/models/**/Write/*.ts"],
    migrations: ["./src/migrations/**/*.ts"],
}
export const AppDataSource = new DataSource(options)
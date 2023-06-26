import { ConnectionOptions, DataSource } from "typeorm";
import { config } from "../../config";

const options: ConnectionOptions = {
  retryWrites: true,
  w: "majority",
  useNewUrlParser: true,
  type: "mongodb",
  authMechanism: "DEFAULT",
  authSource: "admin",
  host: config.READ_HOST,
  port: config.READ_PORT,
  username: config.READ_USERNAME,
  password: config.READ_PASSWORD,
  database: config.READ_DATABASE,
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: ["./src/models/**/Read/*.ts"]
};
export const AppMongoDataSource = new DataSource(options);
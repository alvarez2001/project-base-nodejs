import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres_database_diocesis",
    port: 5432,
    username: "diocesis",
    password: "Wcny7GhygQJWpj46yk",
    database: "diocesis",
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: ["./src/models/**/Write/*.ts"],
    migrations: ["./src/migrations/**/*.ts"],
})
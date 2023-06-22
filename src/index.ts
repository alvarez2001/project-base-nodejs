import "reflect-metadata";
import app from './server';
import {AppDataSource} from './core/databases/db-write';
import {RabbitmqHandler} from "./core/rabbitmq";
import {mongooseConnection} from "./core/databases/db-read";

async function main() {
    try {

        await AppDataSource.initialize();
        await mongooseConnection.then();
        const PORT = 3000;

        app.listen(PORT, async () => {
            console.log('SERVER ON PORT 3000');

            const rabbitmq = new RabbitmqHandler();
            await rabbitmq.connected();
            await rabbitmq.bindingQueueWithExchange();

        })
    } catch (e) {
        console.log(e)
    }

}

main();




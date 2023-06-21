import "reflect-metadata"
import app from './server';
import {AppDataSource} from './core/databases/db-write';
import {WriteUser} from "./models/User/Write/WriteUser";
import {RabbitmqHandler} from "./core/rabbitmq";

async function main() {
    try {

        await AppDataSource.initialize();
        const PORT = 3000;

        app.listen(PORT, async () => {
            console.log('SERVER ON PORT 3000');

            const rabbitmq = new RabbitmqHandler();
            await rabbitmq.connected();
            await rabbitmq.bindingQueueWithExchange();


            const user = new WriteUser();
            user.names = 'probando';
            user.last_name = 'probando';
            user.email = 'probando';
            user.username = 'probando';
            user.identification = 'probando';
            user.identification_type = 'V';
            user.password = '123';
            user.type = 1;
            user.status = 1;

            user.save();

        })
    } catch (e) {
        console.log(e)
    }

}

main();




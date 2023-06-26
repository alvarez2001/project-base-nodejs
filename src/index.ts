import "reflect-metadata";
import app from "./server";
import { AppDataSource } from "./core/databases/db-write";
import { RabbitmqHandler } from "./core/rabbitmq";
import { AppMongoDataSource } from "./core/databases/db-read";
import { config } from "./config";

async function main() {
  try {
    await AppDataSource.initialize();
    await AppMongoDataSource.initialize();
    const PORT = config.PORT;

    app.listen(PORT, async () => {
      console.log(`SERVER ON PORT ${PORT}`);

      const rabbitmq = new RabbitmqHandler();
      await rabbitmq.connected();
      setTimeout(async () => {
        await rabbitmq.bindingQueueWithExchange();
      }, 5000);


    });
  } catch (e) {
    console.log(e);
  }

}

main();




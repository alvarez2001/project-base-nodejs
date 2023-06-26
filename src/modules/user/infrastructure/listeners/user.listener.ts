import { EntitySubscriberInterface, EventSubscriber, InsertEvent, SoftRemoveEvent, UpdateEvent } from "typeorm";
import { WriteUser } from "../../../../models/User/Write/WriteUser";
import { RabbitmqHandler } from "../../../../core/rabbitmq";
import { RabbitMQJob } from "../../../../core/rabbitmq/RabbitMQJob";
import { UserCreatedConsumer } from "../consumers/user.created.consumer";
import { UserUpdatedConsumer } from "../consumers/user.updated.consumer";
import { UserDeletedConsumer } from "../consumers/user.deleted.consumer";

@EventSubscriber()
export class UserListener implements EntitySubscriberInterface<WriteUser> {
  listenTo(): ReturnType<any> {
    return WriteUser;
  }

  async afterInsert(event: InsertEvent<WriteUser>): Promise<void> {
    const entity = event.entity;

    const rabbitMQJob = new RabbitMQJob();
    rabbitMQJob.timestamp = new Date().getTime();
    rabbitMQJob.displayNames = {
      "user.created.queue": UserCreatedConsumer.fileName
    };
    rabbitMQJob.message = entity;
    rabbitMQJob.topic = "user.created";
    rabbitMQJob.writeModel = "WriteUser";

    const rabbitmq = new RabbitmqHandler();
    await rabbitmq.connected();
    await rabbitmq.publishMessages("user.fanout", rabbitMQJob.toJson());
  }

  async afterUpdate(event: UpdateEvent<WriteUser>): Promise<void> {
    const entity = event.entity;

    const rabbitMQJob = new RabbitMQJob();
    rabbitMQJob.timestamp = new Date().getTime();
    rabbitMQJob.displayNames = {
      "user.updated.queue": UserUpdatedConsumer.fileName
    };
    rabbitMQJob.message = entity;
    rabbitMQJob.topic = "user.updated";
    rabbitMQJob.writeModel = "WriteUser";

    const rabbitmq = new RabbitmqHandler();
    await rabbitmq.connected();
    await rabbitmq.publishMessages("user.fanout", rabbitMQJob.toJson());
  }

  async afterSoftRemove(event: SoftRemoveEvent<WriteUser>): Promise<void> {
    const entity = event.entity;
    if (!entity) return;

    const rabbitMQJob = new RabbitMQJob();
    rabbitMQJob.timestamp = new Date().getTime();
    rabbitMQJob.displayNames = {
      "user.deleted.queue": UserDeletedConsumer.fileName
    };
    rabbitMQJob.message = entity;
    rabbitMQJob.topic = "user.deleted";
    rabbitMQJob.writeModel = "WriteUser";

    const rabbitmq = new RabbitmqHandler();
    await rabbitmq.connected();
    await rabbitmq.publishMessages("user.fanout", rabbitMQJob.toJson());
  }
}
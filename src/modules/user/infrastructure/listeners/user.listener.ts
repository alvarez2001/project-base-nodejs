import { EntitySubscriberInterface, EventSubscriber, InsertEvent, SoftRemoveEvent, UpdateEvent } from "typeorm";
import { WriteUser } from "../../../../models/User/Write/WriteUser";

@EventSubscriber()
export class UserListener implements EntitySubscriberInterface<WriteUser> {
  listenTo(): ReturnType<any> {
    return WriteUser;
  }

  async afterInsert(_event: InsertEvent<WriteUser>): Promise<void> {
    // console.log(event.entity);
  }

  async afterUpdate(_event: UpdateEvent<WriteUser>): Promise<void> {
    // console.log((event.entity));
  }

  async afterSoftRemove(_event: SoftRemoveEvent<WriteUser>): Promise<void> {
    // console.log(event.entityId);
  }
}
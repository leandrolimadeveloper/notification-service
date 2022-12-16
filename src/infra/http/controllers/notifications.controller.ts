import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/use-cases/send-notification-use-case';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) { }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    })

    return { notification }
  }
}

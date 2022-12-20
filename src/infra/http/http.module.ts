import { Module } from '@nestjs/common';
import { CancelNotification } from 'src/use-cases/cancel-notification';
import { CountRecipientNotification } from 'src/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from 'src/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/use-cases/read-notification';
import { UnreadNotification } from 'src/use-cases/unread-notification';
import { SendNotification } from 'src/use-cases/send-notification-use-case';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification    
  ]
})
export class HttpModule { }

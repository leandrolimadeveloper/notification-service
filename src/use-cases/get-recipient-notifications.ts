import { Notification } from "@app/entities/notification"
import { Injectable } from "@nestjs/common"
import { NotificationsRepository } from '../app/repositories/notifications-repository'

interface GetRecipientNotificationRequest {
    recipientId: string
}

interface GetRecipientNotificationResponse {
    notifications: Notification[]
}

@Injectable()
export class GetRecipientNotification {
    constructor(private notificationRepository: NotificationsRepository) { }

    async execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse> {
        const { recipientId } = request

        const notifications = await this.notificationRepository.findManyByRecipientId(
            recipientId
        )

        return {
            notifications
        }
    }
}
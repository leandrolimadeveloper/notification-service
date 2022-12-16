import { InMemoryNotificationsRepository } from "../../test/repositories/in-memory-notifications-repositories"
import { SendNotification } from "./send-notification-use-case"

describe('Send notication', () => {
    it('should be able to send a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()

        const sendNotification = new SendNotification(notificationsRepository)

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipientId'
        })

        expect(notificationsRepository.notifications).toHaveLength(1)
        expect(notificationsRepository.notifications[0]).toEqual(notification)
    })
})
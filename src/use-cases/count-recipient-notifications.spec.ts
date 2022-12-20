import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories"
import { CountRecipientNotification } from "./count-recipient-notifications"

describe('Count recipients notifications', () => {
    it("should be able to count the recipient's notifications'", async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const countRecipientNotifications = new CountRecipientNotification(
            notificationsRepository
        )

        await notificationsRepository.create(
            makeNotification({recipientId: 'recipientId-1'})
        )

        await notificationsRepository.create(
            makeNotification({recipientId: 'recipientId-1'})
        )

        await notificationsRepository.create(
            makeNotification({recipientId: 'recipientId-2'})
        )

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipientId-1'
        })

        expect(count).toEqual(2)
    })
})
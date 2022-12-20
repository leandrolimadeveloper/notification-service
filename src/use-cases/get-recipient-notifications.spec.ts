import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories"
import { GetRecipientNotification } from "./get-recipient-notifications"

describe("Get recipient's notifications", () => {
    it("should be able to count the recipient's notifications'", async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const getRecipientNotifications = new GetRecipientNotification(
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

        const { notifications } = await getRecipientNotifications.execute({
            recipientId: 'recipientId-1'
        })

        expect(notifications).toHaveLength(2)
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({recipientId: 'recipientId-1'}),
            expect.objectContaining({recipientId: 'recipientId-1'})
        ]))
    })
})
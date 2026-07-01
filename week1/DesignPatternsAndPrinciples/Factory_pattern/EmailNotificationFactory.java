public class EmailNotificationFactory extends NotificationFactory {
    @Override
    public Notification createNotification() {
        System.out.println("EmailNotificationFactory: creating an EmailNotification...");
        return new EmailNotification();
    }
}
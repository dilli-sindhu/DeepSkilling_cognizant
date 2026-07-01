public class PushNotificationFactory extends NotificationFactory {
    @Override
    public Notification createNotification() {
        System.out.println("PushNotificationFactory: creating a PushNotification...");
        return new PushNotification();
    }
}
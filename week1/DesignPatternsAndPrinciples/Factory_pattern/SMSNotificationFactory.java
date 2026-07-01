public class SMSNotificationFactory extends NotificationFactory {
    @Override
    public Notification createNotification() {
        System.out.println("SMSNotificationFactory: creating an SMSNotification...");
        return new SMSNotification();
    }
}
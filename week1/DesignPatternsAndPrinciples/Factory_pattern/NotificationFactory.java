public abstract class NotificationFactory {
    public abstract Notification createNotification();   
    public void send() {
        System.out.println("NotificationFactory: preparing to send...");
        Notification notification = createNotification();
        notification.notifyUser();
    }
}
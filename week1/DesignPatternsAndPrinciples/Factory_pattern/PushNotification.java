public class PushNotification implements Notification {
    public PushNotification() {
        System.out.println("PushNotification object CREATED.");
    }

    @Override
    public void notifyUser() {
        System.out.println("Sending a PUSH notification.");
    }
}
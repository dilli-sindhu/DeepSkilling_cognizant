public class SMSNotification implements Notification {
    public SMSNotification() {
        System.out.println("SMSNotification object CREATED.");
    }

    @Override
    public void notifyUser() {
        System.out.println("Sending an SMS notification.");
    }
}
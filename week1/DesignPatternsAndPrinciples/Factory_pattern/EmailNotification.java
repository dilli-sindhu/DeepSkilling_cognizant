public class EmailNotification implements Notification {
    public EmailNotification() {
        System.out.println("EmailNotification object CREATED.");
    }

    @Override
    public void notifyUser() {
        System.out.println("Sending an EMAIL notification.");
    }
}
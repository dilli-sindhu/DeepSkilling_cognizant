public class Main {
    public static void main(String[] args) {
        System.out.println("---- Using Email Factory ----");
        NotificationFactory emailFactory = new EmailNotificationFactory();
        emailFactory.send();

        System.out.println("\n---- Using SMS Factory ----");
        NotificationFactory smsFactory = new SMSNotificationFactory();
        smsFactory.send();

        System.out.println("\n---- Using Push Factory ----");
        NotificationFactory pushFactory = new PushNotificationFactory();
        pushFactory.send();
    }
}
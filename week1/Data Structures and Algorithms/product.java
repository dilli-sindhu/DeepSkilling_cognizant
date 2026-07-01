import java.util.*;

public class Product {
    private String id;
    private String name;
    private String category;
    private double price;
    private double rating;

    public Product(String id, String name, String category, double price, double rating) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.rating = rating;
    }

    public String getId() { return id; }
    public String getName() { return name; }
    public String getCategory() { return category; }
    public double getPrice() { return price; }
    public double getRating() { return rating; }

    @Override
    public String toString() {
        return String.format("[%s] %s | Category: %s | Price: $%.2f | Rating: %.1f",
                id, name, category, price, rating);
    }
}
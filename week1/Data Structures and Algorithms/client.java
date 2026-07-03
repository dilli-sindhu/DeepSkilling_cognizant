import java.util.*;

public class Main {
    public static void main(String[] args) {

        // Sample catalog
        List<Product> catalog = new ArrayList<>();
        catalog.add(new Product("P1", "Smartphone X", "Electronics", 699.99, 4.5));
        catalog.add(new Product("P2", "Smartphone Lite", "Electronics", 299.99, 4.0));
        catalog.add(new Product("P3", "Bluetooth Headphones", "Electronics", 89.99, 4.2));
        catalog.add(new Product("P4", "Running Shoes", "Footwear", 59.99, 4.6));
        catalog.add(new Product("P5", "Formal Shoes", "Footwear", 79.99, 4.1));
        catalog.add(new Product("P6", "Smart Watch", "Electronics", 149.99, 4.3));

        SearchService searchService = new SearchService(catalog);

        System.out.println("==== Step 1: Search by keyword \"smart\" ====");
        List<Product> keywordResults = searchService.searchByKeyword("smart");
        keywordResults.forEach(System.out::println);

        System.out.println("\n==== Step 2: Filter those results by category \"Electronics\" ====");
        List<Product> categoryFiltered = searchService.filterByCategory(keywordResults, "Electronics");
        categoryFiltered.forEach(System.out::println);

        System.out.println("\n==== Step 3: Filter by price range $100 - $500 ====");
        List<Product> priceFiltered = searchService.filterByPriceRange(categoryFiltered, 100, 500);
        priceFiltered.forEach(System.out::println);

        System.out.println("\n==== Step 4: Sort remaining results by rating ====");
        List<Product> finalResults = searchService.sortResults(priceFiltered, "rating");
        finalResults.forEach(System.out::println);
    }
}

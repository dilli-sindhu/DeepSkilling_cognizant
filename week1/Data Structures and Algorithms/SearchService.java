import java.util.*;
import java.util.stream.*;

public class SearchService {

    private List<Product> catalog;

    public SearchService(List<Product> catalog) {
        this.catalog = catalog;
        System.out.println("SearchService initialized with " + catalog.size() + " products.\n");
    }

    // Keyword search (case-insensitive, partial match on name)
    public List<Product> searchByKeyword(String keyword) {
        System.out.println("Searching for keyword: \"" + keyword + "\"...");
        List<Product> results = catalog.stream()
                .filter(p -> p.getName().toLowerCase().contains(keyword.toLowerCase()))
                .collect(Collectors.toList());
        System.out.println("Found " + results.size() + " result(s) for \"" + keyword + "\".\n");
        return results;
    }

    // Filter by category
    public List<Product> filterByCategory(List<Product> products, String category) {
        System.out.println("Filtering results by category: \"" + category + "\"...");
        List<Product> filtered = products.stream()
                .filter(p -> p.getCategory().equalsIgnoreCase(category))
                .collect(Collectors.toList());
        System.out.println("Filtered down to " + filtered.size() + " result(s).\n");
        return filtered;
    }

    // Filter by price range
    public List<Product> filterByPriceRange(List<Product> products, double min, double max) {
        System.out.println("Filtering results by price range: $" + min + " - $" + max + "...");
        List<Product> filtered = products.stream()
                .filter(p -> p.getPrice() >= min && p.getPrice() <= max)
                .collect(Collectors.toList());
        System.out.println("Filtered down to " + filtered.size() + " result(s).\n");
        return filtered;
    }

    // Sort by price (ascending) or rating (descending)
    public List<Product> sortResults(List<Product> products, String sortBy) {
        System.out.println("Sorting results by: " + sortBy + "...");
        List<Product> sorted = new ArrayList<>(products);
        if (sortBy.equalsIgnoreCase("price")) {
            sorted.sort(Comparator.comparingDouble(Product::getPrice));
        } else if (sortBy.equalsIgnoreCase("rating")) {
            sorted.sort(Comparator.comparingDouble(Product::getRating).reversed());
        }
        System.out.println("Sorting complete.\n");
        return sorted;
    }
}
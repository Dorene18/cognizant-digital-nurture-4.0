package com.cognizant;
import java.util.Arrays;
import java.util.Comparator;

public class eplateform {
	    static class Product {
	        private int productId;
	        private String productName;
	        private String category;

	        public Product(int productId, String productName, String category) {
	            this.productId = productId;
	            this.productName = productName;
	            this.category = category;
	        }

	        public int getProductId() {
	            return productId;
	        }

	        @Override
	        public String toString() {
	            return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
	        }
	    }

	    public static Product linearSearch(Product[] products, int targetId) {
	        for (Product product : products) {
	            if (product.getProductId() == targetId) {
	                return product;
	            }
	        }
	        return null;
	    }
	    public static Product binarySearch(Product[] products, int targetId) {
	        int low = 0;
	        int high = products.length - 1;

	        while (low <= high) {
	            int mid = low + (high - low) / 2;
	            int midId = products[mid].getProductId();

	            if (midId == targetId) {
	                return products[mid];
	            } else if (midId < targetId) {
	                low = mid + 1;
	            } else {
	                high = mid - 1;
	            }
	        }
	        return null; 
	    }

	    public static void sortProductsById(Product[] products) {
	        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));
	    }

	    public static void main(String[] args) {

	        Product[] products = {
	            new Product(3, "Laptop", "Electronics"),
	            new Product(1, "Book", "Education"),
	            new Product(5, "Smartphone", "Electronics"),
	            new Product(2, "Pen", "Stationery"),
	            new Product(4, "Shoes", "Footwear")
	        };

	        int searchId = 5;

	   
	        System.out.println(" Linear Search for ID " + searchId);
	        Product foundLinear = linearSearch(products, searchId);
	        if (foundLinear != null) {
	            System.out.println(" Found: " + foundLinear);
	        } else {
	            System.out.println("Product not found (Linear Search)");
	        }

	        System.out.println("\n Binary Search for ID " + searchId);
	        sortProductsById(products); 
	        Product foundBinary = binarySearch(products, searchId);
	        if (foundBinary != null) {
	            System.out.println("Found: " + foundBinary);
	        } else {
	            System.out.println(" Product not found (Binary Search)");
	        }
	        
	        System.out.println("\n Time Complexity Comparison:");
	        System.out.println("Linear Search: O(n)");
	        System.out.println("Binary Search: O(log n) (with O(n log n) sort cost upfront if unsorted)");
	        System.out.println(" Binary Search is better for large, sorted product lists.");
	    }
	}

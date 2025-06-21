package com.cognizant;

public class financialfind {
	 public static double futureValueRecursive(double presentValue, double growthRate, int years) {
	        if (years == 0) {
	            return presentValue;
	        }
	        return futureValueRecursive(presentValue, growthRate, years - 1) * (1 + growthRate);
	    }

	    public static double futureValueIterative(double presentValue, double growthRate, int years) {
	        double value = presentValue;
	        for (int i = 0; i < years; i++) {
	            value *= (1 + growthRate);
	        }
	        return value;
	    }

	    public static void main(String[] args) {
	        double presentValue = 1000.0;
	        double growthRate = 0.05; 
	        int years = 10;

	     
	        double recursiveResult = futureValueRecursive(presentValue, growthRate, years);

	        double iterativeResult = futureValueIterative(presentValue, growthRate, years);

	        // Print results
	        System.out.println(" Financial Forecasting Tool ");
	        System.out.println("\n Parameters:");
	        System.out.println("Present Value: " + presentValue);
	        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
	        System.out.println("Years: " + years);

	        System.out.println("\n Recursive Result: " + String.format("%.2f", recursiveResult));
	        System.out.println(" Iterative Result: " + String.format("%.2f", iterativeResult));

	        // Complexity analysis
	        System.out.println("\n Complexity Analysis:");
	        System.out.println("- Recursive time complexity: O(n)");
	        System.out.println("- Recursive space complexity: O(n) (due to call stack)");
	        System.out.println("- Iterative time complexity: O(n)");
	        System.out.println("- Iterative space complexity: O(1)");

	        System.out.println("\n Note:");
	        System.out.println("Recursive solution risks stack overflow for large n.");
	        System.out.println("Iterative or memoized solutions are preferred for large n.");
	    }
	}



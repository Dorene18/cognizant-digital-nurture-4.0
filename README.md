# Java Design Patterns & Algorithms Exercises

This repository contains solutions for various Java exercises demonstrating core design patterns and data structure algorithms. Each exercise is implemented in a clean, modular, and testable way.

---

## Exercises

### 1️ Singleton Pattern Example
- Project: `SingletonPatternExample`
- Pattern: Singleton Design Pattern
-  Ensures only one instance of `Logger` is created.
-  Files:
  - `Logger.java` (singleton class)
  - `SingletonTest.java` (tests singleton behavior)

---

###  Factory Method Pattern Example
- Project: `FactoryMethodPatternExample`
- Pattern: Factory Method Design Pattern
-  Demonstrates creation of different document types (Word, PDF, Excel) using factories.
-  Files:
  - `Document.java` (abstract product)
  - `WordDocument.java`, `PdfDocument.java`, `ExcelDocument.java` (concrete products)
  - `DocumentFactory.java` (abstract factory)
  - `WordFactory.java`, `PdfFactory.java`, `ExcelFactory.java` (concrete factories)
  - `FactoryTest.java` (demonstrates usage)

---

###  E-Commerce Platform Search Function
- Project: `EcommerceSearch`
- Algorithms: Linear Search, Binary Search
-  Implements both linear and binary search on `Product` objects.
-  Compares time complexity and explains best use cases.
-  Files:
  - `EcommerceSearch.java` (contains `Product` class, search methods, and test cases)

---

###  Financial Forecasting
- Project: `FinancialForecast`
- Concepts: Recursion, Iteration
-  Predicts future values based on growth rates using both recursive and iterative approaches.
-  Includes complexity analysis and optimization recommendations.
-  Files:
  - `FinancialForecast.java` (all-in-one implementation with explanation)

---



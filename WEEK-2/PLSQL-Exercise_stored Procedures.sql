
-- Create SavingsAccounts table
CREATE TABLE SavingsAccounts (
    AccountID INT PRIMARY KEY,
    Balance DECIMAL(10,2)
);

-- Create Employees table
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Department VARCHAR(50),
    Salary DECIMAL(10,2)
);

-- Create Accounts table
CREATE TABLE Accounts (
    AccountID INT PRIMARY KEY,
    Balance DECIMAL(10,2)
);

-- Insert sample data
INSERT INTO SavingsAccounts (AccountID, Balance) VALUES
(101, 5000.00),
(102, 12000.00),
(103, 7500.00);

INSERT INTO Employees (EmployeeID, Department, Salary) VALUES
(1, 'Sales', 50000.00),
(2, 'IT', 65000.00),
(3, 'Sales', 48000.00);

INSERT INTO Accounts (AccountID, Balance) VALUES
(201, 10000.00),
(202, 5000.00);

--  Scenario 1: Apply monthly interest (1%)
UPDATE SavingsAccounts 
SET Balance = Balance * 1.01;

SELECT * FROM SavingsAccounts;

--  Scenario 2: Update Employee Bonus (10% for Sales)
UPDATE Employees
SET Salary = Salary * 1.10
WHERE Department = 'Sales';

SELECT * FROM Employees;

-- Scenario 3: Transfer Funds (2000 from 201 to 202)
-- Subtract from source
UPDATE Accounts
SET Balance = Balance - 2000
WHERE AccountID = 201;

-- Add to destination
UPDATE Accounts
SET Balance = Balance + 2000
WHERE AccountID = 202;

SELECT * FROM Accounts;
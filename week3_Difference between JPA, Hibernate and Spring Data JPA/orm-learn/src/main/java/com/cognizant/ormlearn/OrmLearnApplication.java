package com.cognizant.ormlearn;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.repository.EmployeeRepository;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private EmployeeRepository employeeRepository;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // Add an employee
        Employee emp = new Employee();
        emp.setName("Alice");
        emp.setDepartment("IT");
        emp.setSalary(60000);
        employeeRepository.save(emp);

        // Fetch and print all employees
        List<Employee> employees = employeeRepository.findAll();
        for (Employee e : employees) {
            System.out.println("Employee: " + e);
        }
    }
}

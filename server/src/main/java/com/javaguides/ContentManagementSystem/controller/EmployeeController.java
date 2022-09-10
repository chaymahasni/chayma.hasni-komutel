package com.javaguides.ContentManagementSystem.controller;

import com.javaguides.ContentManagementSystem.entity.Employee;
import com.javaguides.ContentManagementSystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")

public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

@GetMapping("/employees")
    public List<Employee> getAllEmployees(){
    return employeeRepository.findAll();
    }

@PostMapping("/employees/add")
    public Employee createEmployee (@RequestBody Employee newEmp){
    return employeeRepository.save(newEmp);
}

}

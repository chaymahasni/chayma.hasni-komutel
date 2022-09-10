package com.javaguides.ContentManagementSystem.repository;

import com.javaguides.ContentManagementSystem.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee ,Long>{
}

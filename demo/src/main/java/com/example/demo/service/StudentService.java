package com.example.demo.service;

import com.example.demo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentService extends JpaRepository<Student, Integer> {

    Student saveStudent ( Student student );

    List<Student> getAllStudents ( );
}

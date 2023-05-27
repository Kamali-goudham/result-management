package com.mscomm.studentservice.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.studentservice.entity.*;
public interface StudentRepository extends JpaRepository<Student, Long>{

}

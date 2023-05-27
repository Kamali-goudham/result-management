package com.mscomm.studentservice.service;
import com.mscomm.studentservice.entity.*;

import com.mscomm.studentservice.dto.ResponseDto;
public interface StudentService {
	Student saveStudent(Student student);

    ResponseDto getStudent(Long studentId);
}

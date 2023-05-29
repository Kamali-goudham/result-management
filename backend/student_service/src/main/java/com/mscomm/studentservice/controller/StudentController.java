package com.mscomm.studentservice.controller;
import lombok.AllArgsConstructor;
import com.mscomm.studentservice.dto.ResponseDto;
import com.mscomm.studentservice.entity.Student;
import com.mscomm.studentservice.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("api/students")
@AllArgsConstructor
public class StudentController {
	  private StudentService studentService;
	    @PostMapping
	    public ResponseEntity<Student> saveStudent(@RequestBody Student student){
	        Student savedStudent = studentService.saveStudent(student);
	        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
	    }
	    
	    @GetMapping("{id}")
	    public ResponseEntity<ResponseDto> getStudent(@PathVariable("id") Long studentId){
	        ResponseDto responseDto = studentService.getStudent(studentId);
	        return ResponseEntity.ok(responseDto);
	    }
}

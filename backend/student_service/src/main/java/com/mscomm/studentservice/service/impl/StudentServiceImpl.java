package com.mscomm.studentservice.service.impl;
import com.mscomm.studentservice.entity.Student;
import com.mscomm.studentservice.service.*;
import com.mscomm.studentservice.repository.*;
import org.springframework.web.client.RestTemplate;
import com.mscomm.studentservice.dto.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
@AllArgsConstructor

public class StudentServiceImpl implements StudentService {

	 private StudentRepository studentRepository;
	    private RestTemplate restTemplate;
	@Override
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}

	@Override
	public ResponseDto getStudent(Long studentId) {

        ResponseDto responseDto = new ResponseDto();
        Student student = studentRepository.findById(studentId).get();
        StudentDto studentDto = mapToStudent(student);

        ResponseEntity<ResultDto> responseEntity = restTemplate
                .getForEntity("http://localhost:8082/api/results/" + student.getResultId(),
                ResultDto.class);

        ResultDto resultDto = responseEntity.getBody();

        System.out.println(responseEntity.getStatusCode());

        responseDto.setStudent(studentDto);
        responseDto.setResult(resultDto);

        return responseDto;
	}
	private StudentDto mapToStudent(Student student){
        StudentDto studentDto = new StudentDto();
        studentDto.setId(student.getId());
        studentDto.setName(student.getName());
        studentDto.setEmail(student.getEmail());
        studentDto.setPassword(student.getPassword());
        studentDto.setDept(student.getDept());
        studentDto.setAddress(student.getAddress());
        return studentDto;
    }

}

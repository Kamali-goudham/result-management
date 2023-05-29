package com.mscomm.studentservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto {
	 private ResultDto result;
	    private StudentDto student;
		public void setStudent(StudentDto studentDto) {
			// TODO Auto-generated method stub
			
		}
		public void setResult(ResultDto resultDto) {
			// TODO Auto-generated method stub
			
		}
}

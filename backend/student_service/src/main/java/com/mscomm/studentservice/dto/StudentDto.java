package com.mscomm.studentservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {

	private Long id;
    private String name;
    private String email;
    private String password;
    private String dept;
    private String address;
}

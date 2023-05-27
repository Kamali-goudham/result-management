package com.mscomm.studentservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "students")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Student {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    
	    private Long id;
	    private String name;
	    @Column(nullable = false, unique = true)
	    private String email;
	    private String password;
	    private String dept;
	    private String address;
	    private String resultId;
}

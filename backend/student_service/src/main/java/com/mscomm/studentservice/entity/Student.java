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
		public String getResultId() {
			// TODO Auto-generated method stub
			return null;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getDept() {
			return dept;
		}
		public void setDept(String dept) {
			this.dept = dept;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public void setResultId(String resultId) {
			this.resultId = resultId;
		}
}

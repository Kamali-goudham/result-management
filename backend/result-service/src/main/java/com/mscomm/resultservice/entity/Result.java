package com.mscomm.resultservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "results")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Result {

	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private Integer mark1;
	    private Integer mark2;
	    private Integer mark3;
	    private Integer mark4;
	    private Integer mark5;
	    private Integer total;
	    
}

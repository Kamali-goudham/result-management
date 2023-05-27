package com.mscomm.studentservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ResultDto {
	private Long id;
    private Integer mark1;
    private Integer mark2;
    private Integer mark3;
    private Integer mark4;
    private Integer mark5;
    private Integer total;
    
}

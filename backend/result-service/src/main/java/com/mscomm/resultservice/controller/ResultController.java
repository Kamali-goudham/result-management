package com.mscomm.resultservice.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.resultservice.entity.Result;
import com.mscomm.resultservice.service.ResultService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/results")
@AllArgsConstructor
public class ResultController {

	private ResultService resultService;

    @PostMapping
    public ResponseEntity<Result> saveResult(@RequestBody Result result){
        Result savedResult = resultService.saveResult(result);
        return new ResponseEntity<>(savedResult, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Result> getResultById(@PathVariable("id") Long resultId){
        Result result = resultService.getResultById(resultId);
        return ResponseEntity.ok(result);
    }
}


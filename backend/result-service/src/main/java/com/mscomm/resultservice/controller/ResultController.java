package com.mscomm.resultservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.resultservice.entity.Result;
import com.mscomm.resultservice.service.ResultService;

import lombok.AllArgsConstructor;
import java.util.List;

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
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<Result> updateResult(@PathVariable("id") Long resultId, @RequestBody Result result){
        Result existingResult = resultService.getResultById(resultId);
        if (existingResult != null) {
            result.setId(resultId);
            Result updatedResult = resultService.saveResult(result);
            return ResponseEntity.ok(updatedResult);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteResult(@PathVariable("id") Long resultId){
        Result existingResult = resultService.getResultById(resultId);
        if (existingResult != null) {
            resultService.deleteResult(resultId);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Result>> getAllResults(){
        List<Result> results = resultService.getAllResults();
        return ResponseEntity.ok(results);
    }
}

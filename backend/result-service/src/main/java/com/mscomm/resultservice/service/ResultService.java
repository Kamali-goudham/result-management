package com.mscomm.resultservice.service;

import com.mscomm.resultservice.entity.*;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface ResultService {
    

    Result saveResult(Result result);

    Result getResultById(Long resultId);

    Result updateResult(Result result);

    void deleteResult(Long resultId);

    List<Result> getAllResults();
}





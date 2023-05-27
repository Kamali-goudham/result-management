package com.mscomm.resultservice.service;

import com.mscomm.resultservice.entity.*;

public interface ResultService {
    Result saveResult(Result result);

    Result getResultById(Long resultId);
}
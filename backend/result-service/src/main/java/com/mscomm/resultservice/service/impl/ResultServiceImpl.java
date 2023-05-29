package com.mscomm.resultservice.service.impl;
import org.springframework.stereotype.Service;
import java.util.List;
import com.mscomm.resultservice.entity.Result;
import com.mscomm.resultservice.repository.ResultRepository;
import com.mscomm.resultservice.service.ResultService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ResultServiceImpl implements ResultService {

    private ResultRepository resultRepository;
    
    public ResultServiceImpl(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    @Override
    public Result saveResult(Result result) {
        return resultRepository.save(result);
    }

    @Override
    public Result getResultById(Long resultId) {
        return resultRepository.findById(resultId).orElse(null);
    }

    @Override
    public Result updateResult(Result result) {
        return resultRepository.save(result);
    }

    @Override
    public void deleteResult(Long resultId) {
        resultRepository.deleteById(resultId);
    }

    @Override
    public List<Result> getAllResults() {
        return resultRepository.findAll();
    }
}



package com.mscomm.resultservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.resultservice.entity.Result;

public interface ResultRepository extends JpaRepository<Result,Long> {

}

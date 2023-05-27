package com.javatpoint.repository;
import org.springframework.data.repository.CrudRepository;
//repository that extends CrudRepository
import com.javatpoint.model.Facultys;
public interface FacultysRepository extends CrudRepository<Facultys, String>
{
}
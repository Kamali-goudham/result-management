package com.javatpoint.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.javatpoint.model.Facultys;
import com.javatpoint.repository.FacultysRepository;
//defining the business logic
@Service
public class FacultysService 
{
@Autowired
FacultysRepository facultysRepository;
//getting all facultys record by using the method findaAll() of CrudRepository
public List<Facultys> getAllFacultys() 
{
List<Facultys> facultys = new ArrayList<Facultys>();
facultysRepository.findAll().forEach(facultys1 -> facultys.add(facultys1));
return facultys;
}
//getting a specific record by using the method findById() of CrudRepository
public Facultys getFacultysById(String name) 
{
return facultysRepository.findById(name).get();
}
//saving a specific record by using the method save() of CrudRepository
public void saveOrUpdate(Facultys facultys) 
{
facultysRepository.save(facultys);
}
//deleting a specific record by using the method deleteById() of CrudRepository
public void delete(String name) 
{
facultysRepository.deleteById(name);
}
//updating a record
public void update(Facultys facultys, String name) 
{
facultysRepository.save(facultys);
}
}
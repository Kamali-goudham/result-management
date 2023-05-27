package com.javatpoint.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.javatpoint.model.Facultys;
import com.javatpoint.service.FacultysService;
//mark class as Controller
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FacultysController 
{

@Autowired
FacultysService facultysService;
//creating a get mapping that retrieves all the facultys detail from the database 
@GetMapping("/faculty")
private List<Facultys> getAllFacultys() 
{
return facultysService.getAllFacultys();
}
//creating a get mapping that retrieves the detail of a specific faculty
@GetMapping("/faculty/{name}")
private Facultys getFacultys(@PathVariable("name") String name) 
{
return facultysService.getFacultysById(name);
}
//creating a delete mapping that deletes a specified faculty
@DeleteMapping("/faculty/{name}")
private void deleteFaculty(@PathVariable("name") String name) 
{
facultysService.delete(name);
}
//creating post mapping that post the faculty detail in the database
@PostMapping("/facultys")
private String saveFaculty(@RequestBody Facultys facultys) 
{
facultysService.saveOrUpdate(facultys);
return facultys.getName();
}
//creating put mapping that updates the faculty detail 
@PutMapping("/facultys")
private Facultys update(@RequestBody Facultys facultys) 
{
facultysService.saveOrUpdate(facultys);
return facultys;
}
}

package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Parc;
import com.example.demo.models.GeneralResponse;
import com.example.demo.models.ParcModel;
import com.example.demo.repositories.ParcRepository;

@RestController
@RequestMapping("/api/parc")
@CrossOrigin( origins="*" )
public class ParcController {
	
	
	@Autowired
	private ParcRepository pr;

	
	
	@GetMapping("/list")
	public ResponseEntity<?> getParcs(){
		return ResponseEntity.ok( this.pr.findAll() );
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addParc( @RequestBody ParcModel model ){
		
		Parc parc = new Parc();
		parc.setName(model.getName());
		parc.setAddress(model.getAddress());
		
		this.pr.save(parc);
		
		return ResponseEntity.ok( new GeneralResponse(true,"Parc inserted successfully")  );
	}
	
	
	@PostMapping("/update/{id}")
	public ResponseEntity<?> editParc( @RequestBody ParcModel model, @PathVariable long id ){
		
		Parc parc = this.pr.findById(id).get();
		parc.setName(model.getName());
		parc.setAddress(model.getAddress());
		
		this.pr.save(parc);
		
		return ResponseEntity.ok( new GeneralResponse(true,"Parc updated successfully")  );
	}
	
	
	@PostMapping("/delete/{id}")
	public ResponseEntity<?> deleteParc(  @PathVariable long id ){
		
		Parc parc = this.pr.findById(id).get();
		 
		this.pr.delete(parc);
		
		return ResponseEntity.ok( new GeneralResponse(true,"Parc deleted successfully")  );
	}
	
	
	

}

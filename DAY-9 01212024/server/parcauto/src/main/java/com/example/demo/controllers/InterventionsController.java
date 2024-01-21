package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Client;
import com.example.demo.entities.Intervention;
import com.example.demo.entities.Vehicules;
import com.example.demo.models.ClientModel;
import com.example.demo.models.GeneralResponse;
import com.example.demo.models.InterventionModel;
import com.example.demo.repositories.*;

@RestController
@RequestMapping("/api/interventions")
public class InterventionsController {

	@Autowired
	private ClientRepository cr;
	
	@Autowired
	private VehiculeRepository vr;
	
	@Autowired
	private InterventionRepository ir;
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getAll(){
		return ResponseEntity.ok( this.ir.findAll() );
	}
	
	
	
	@PostMapping("/add")
	public ResponseEntity<?> add( @RequestBody InterventionModel model ){
		Intervention i = new Intervention();
		
		Client client = this.cr.findById(model.getClient()).get();
		
				
		Vehicules vehicule = this.vr.findById(model.getVehicule()).get();
		
		
		i.setDecreption(model.getDecreption());
		i.setClient(client);
		i.setVehicule(vehicule);
		
		this.ir.save(i); 
		return ResponseEntity.ok( new GeneralResponse(true,"intevention inserted successfully") );
	}
	
	
	
	
}

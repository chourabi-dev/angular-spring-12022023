package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Parc;
import com.example.demo.entities.Vehicules;
import com.example.demo.models.GeneralResponse;
import com.example.demo.models.ParcModel;
import com.example.demo.models.VehiculeModel;
import com.example.demo.repositories.*;

@RestController
@RequestMapping("/api/vehicules")
public class VehiculesController {

	@Autowired
	private VehiculeRepository vr;
	
	@Autowired
	private ParcRepository pr;
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getVehicules(){
		return ResponseEntity.ok( this.vr.findAll() );
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addVehicule( @RequestBody VehiculeModel model ){
		
		Vehicules v = new Vehicules();
		v.setColor(model.getColor());
		v.setImmatriculation(model.getImmatriculation());
		v.setMark(model.getMark());
		v.setModel(model.getModel());
		v.setVin(model.getVin());
		
		
		long parc_id = model.getParc();
		Parc parc = this.pr.findById(parc_id).get();
		
		
		v.setParc(parc);
		
		
		this.vr.save(v);
		
		return ResponseEntity.ok( new GeneralResponse(true,"vehicule inserted successfully")  );
	}
	
	
	
	
	
}

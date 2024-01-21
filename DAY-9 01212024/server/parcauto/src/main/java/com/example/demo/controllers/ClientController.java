package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Client;
import com.example.demo.models.ClientModel;
import com.example.demo.models.GeneralResponse;
import com.example.demo.repositories.ClientRepository;

@RestController
@RequestMapping("/api/clients")
public class ClientController {
	
	@Autowired
	private ClientRepository clientRepository;
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getAll(){
		return ResponseEntity.ok( this.clientRepository.findAll() );
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add( @RequestBody ClientModel model ){
		
		Client client = new Client();
		client.setName(model.getName());
		client.setEmail(model.getEmail());
		client.setPhone(model.getPhone());
		this.clientRepository.save(client);
		
		return ResponseEntity.ok( new GeneralResponse(true,"Client inserted successfully") );
	}
	
	
	// SEARCH FOR A CLIENT BY EMAIL !!
	
	// SELECT * FROM CLIENT WHERE EMAIL = ?
	
	@GetMapping("/find")
	public ResponseEntity<?> findClientUsingEmail( @RequestParam( name="email" ) String email ){
		Client client = this.clientRepository.findByEmail(email);
		
		if( client != null ) {
			return ResponseEntity.ok(client);
		}

		return ResponseEntity.ok( new GeneralResponse(false,"Client not found") );
		
		
		
	}

}

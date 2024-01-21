package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Client;

public interface ClientRepository extends JpaRepository<Client,Long> {

	// §§§ IMPORTANT §§§
	
	Client findByEmail(String email); // SELECT * FROM CLIENT WHERE EMAIL =
	
	Client findByEmailAndName(String email, String name); // SELECT * FROM CLIENT WHERE EMAIL = ? AND name = ?
	
	
	
	
	
	
	// List<Client>
}

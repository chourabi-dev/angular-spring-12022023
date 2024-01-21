package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Client;
import com.example.demo.entities.Intervention;
import com.example.demo.entities.Vehicules;

public interface InterventionRepository extends JpaRepository<Intervention,Long> {

	
	List<Intervention> findByVehicule(Vehicules vehicule);
	
	List<Intervention> findByClient(Client client);
	
	
	
}

package com.example.demo.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table( name="interventions" )
public class Intervention {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	
	@Column( name="intervention_decreption", nullable=false )
	private String decreption;
	
	@Column( name="intervention_date", nullable=false )
	private LocalDateTime createdAt = LocalDateTime.now();
	
	
	@ManyToOne
	private Client client;
	
	@ManyToOne
	private Vehicules vehicule;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDecreption() {
		return decreption;
	}

	public void setDecreption(String decreption) {
		this.decreption = decreption;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Vehicules getVehicule() {
		return vehicule;
	}

	public void setVehicule(Vehicules vehicule) {
		this.vehicule = vehicule;
	}

	public Intervention() {
		super();
	}
	
	
	
	
	
}

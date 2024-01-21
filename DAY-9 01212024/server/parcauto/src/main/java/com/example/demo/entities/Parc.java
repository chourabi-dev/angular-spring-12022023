package com.example.demo.entities;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table( name="pars" )
public class Parc {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	
	@Column( name="parc_name", nullable=false )
	private String name;
	
	@Column( name="parc_address", nullable=false )
	private String address;
	
	
	@OneToMany( mappedBy = "parc" )
	private List<Vehicules> vehicules;
	
	
	
	

	public List<Vehicules> getVehicules() {
		return vehicules;
	}

	public void setVehicules(List<Vehicules> vehicules) {
		this.vehicules = vehicules;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Parc() {
		super();
	}
	
	
	
	

}

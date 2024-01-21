package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table( name="vehicules" )

public class Vehicules {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column( name="vehicules_mark", nullable=false )
	private String mark;
	
	@Column( name="vehicules_model", nullable=false )
	private String model;
	
	@Column( name="vehicules_vin", nullable=false )
	private String vin;
	
	@Column( name="vehicules_imatricltaion", nullable=false )
	private String immatriculation;
	
	@Column( name="vehicules_color", nullable=false )
	private String color;
	
	
	@ManyToOne
	@JsonIgnore
	private Parc parc;


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getMark() {
		return mark;
	}


	public void setMark(String mark) {
		this.mark = mark;
	}


	public String getModel() {
		return model;
	}


	public void setModel(String model) {
		this.model = model;
	}


	public String getVin() {
		return vin;
	}


	public void setVin(String vin) {
		this.vin = vin;
	}


	public String getImmatriculation() {
		return immatriculation;
	}


	public void setImmatriculation(String immatriculation) {
		this.immatriculation = immatriculation;
	}


	public String getColor() {
		return color;
	}


	public void setColor(String color) {
		this.color = color;
	}


	public Parc getParc() {
		return parc;
	}


	public void setParc(Parc parc) {
		this.parc = parc;
	}


	public Vehicules() {
		super();
	}
	
	
	
	
	
}

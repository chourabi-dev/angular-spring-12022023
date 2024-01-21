package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Vehicules;

public interface VehiculeRepository extends JpaRepository<Vehicules,Long> {

}

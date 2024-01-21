package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Parc;

public interface ParcRepository extends JpaRepository<Parc,Long> {

}

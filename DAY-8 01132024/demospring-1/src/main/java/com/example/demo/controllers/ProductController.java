package com.example.demo.controllers;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Product;
import com.example.demo.models.JsonReponse;
import com.example.demo.models.ProductModel;
import com.example.demo.repositories.ProductRepository;

@RestController
@RequestMapping("/api/product")
public class ProductController {

	@Autowired
	private ProductRepository pr;
	
	
	// LIST
	@GetMapping("/list")
	public ResponseEntity<?> findAllProduct(){
		
		return ResponseEntity.ok( this.pr.findAll() );
	}
	
	// INSERT
	
	@PostMapping("/add")
	public  ResponseEntity<?> add( @RequestBody ProductModel model ){
		Product p = new Product();
		
		p.setPrice( model.getPrice() );
		p.setStock(model.getStock());
		p.setTitle(model.getTitle());
		
		
		this.pr.save(p);
		
		return ResponseEntity.ok( new JsonReponse(true,"product inserted successfully.") );
		
	}
	
	
	// FIND
	@GetMapping("/find/{id}")
	public ResponseEntity<?> find( @PathVariable long id ){
		
		try {
			Product p = this.pr.findById(id).get();
			
			
			return ResponseEntity.ok( p);
			
		}catch(NoSuchElementException e) {
			return ResponseEntity.status(404).body( new JsonReponse(false,"Product not found") );
			
		}
		
	}
	// UPDATE
	
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update( @PathVariable long id , @RequestBody ProductModel model ){
		
		try {
			Product p = this.pr.findById(id).get();
			

			p.setPrice( model.getPrice() );
			p.setStock(model.getStock());
			p.setTitle(model.getTitle());
			
			
			this.pr.save(p);
			
			return ResponseEntity.ok( new JsonReponse(true,"product updated successfully.") );
			
			
		}catch(NoSuchElementException e) {
			return ResponseEntity.status(404).body( new JsonReponse(false,"Product not found") );
			
		}
		
	}
	
	// DELETE
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete( @PathVariable long id ){
		
		try {
			Product p = this.pr.findById(id).get();
			
			
			this.pr.delete(p);
			return ResponseEntity.ok( new JsonReponse(true,"product deleted successfully.") );
			
		}catch(NoSuchElementException e) {
			return ResponseEntity.status(404).body( new JsonReponse(false,"Product not found") );
			
		}
		
	}
}

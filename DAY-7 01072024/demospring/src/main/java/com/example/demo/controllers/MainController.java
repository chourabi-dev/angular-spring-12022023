package com.example.demo.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.responses.UserModel;

@RestController
@RequestMapping("/main")
public class MainController {
	
	//GET POST PUT DELETE
	
	
	@GetMapping("/bonjour")
	public String bonjour() {
		return "bonjour...";
	}
	
	
	
	@GetMapping("/somme")
	public int somme(@RequestParam(name="x",required=true) int x,@RequestParam(name="y",required=true) int y) {
		return (x+y);
	}
	
	
	
//  /employee/details/15200
//  /employee/details/15202
//  /employee/details/6325
//  /employee/details/4946615

	@GetMapping("/employee/details/{id}")
	public int detaildEmployee( @PathVariable(name="id") int id  ) {
		return id;
	}
	
	
	@GetMapping("/model-demo")
	public UserModel demoModel(   ) {
		UserModel m = new UserModel();
		
		m.setFullname("chourabi taher");
		m.setEmail("tchourabi@gmail.com");
		
		return m;
	}
	
	
	
	// PUT POST DELETE
	
	
	@PostMapping("/insert/user")
	public void insertUser(@RequestBody  UserModel model ) {
		System.out.println( model.getFullname() );
		
	}
	
	
	/*@PutMapping("/insert/user")
	public void insertUser(@RequestBody  UserModel model ) {
		System.out.println( model.getFullname() );
		
	}*/
	
	
	
	// ResponseEntity
	
	
	
	@GetMapping("/test")
	public ResponseEntity<?> testResponseEntity(){
		UserModel m = new UserModel();
		
		m.setFullname("chourabi taher");
		m.setEmail("tchourabi@gmail.com");
		
		// { succees:true }
		
		
		// {success:false, message:"somethiing went wrong."  }
		 
		return ResponseEntity.status( 200 ).body("success...");
	}
	
	
	
	
	
	
	
	
	
	
	
	
}

package com.example.demo.entities;

import jakarta.persistence.*;

@Entity
@Table( name="products")
public class Product {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column( name="product_title", nullable=false )
	private String title;
	
	@Column( name="product_price", nullable=false )
	private float price;
	
	@Column( name="product_stock", nullable=false )
	private int stock;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public Product() {
		super();
	}

	public Product(String title, float price, int stock) {
		super();
		this.title = title;
		this.price = price;
		this.stock = stock;
	}
	
	
	
	
	
	

}

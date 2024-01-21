package com.example.demo.models;

public class GeneralResponse {
	private boolean success;
	private String message;
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public GeneralResponse() {
		super();
	}
	public GeneralResponse(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}
	
	
	
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }


  list(){
    return this.http.get('http://localhost:8080/api/clients/list')
  }

  add(body:any){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json'); 


    return this.http.post('http://localhost:8080/api/clients/add',body)
  }

  getCars(){
    return this.http.get('http://localhost:8080/api/vehicules/list');
  }


  addIntervention(i:any){
    return this.http.post('http://localhost:8080/api/interventions/add',i);
  }
  
}

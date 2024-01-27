import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http:HttpClient) { }

  add(body:any){
    return this.http.post('http://localhost:8080/api/vehicules/add',body);
  }
  
  
  list(){
    return this.http.get('http://localhost:8080/api/vehicules/list');
  }

  getParcs(){
    return this.http.get('http://localhost:8080/api/parc/list')
  }
  


}

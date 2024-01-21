import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParcServiceService {

  constructor(private http:HttpClient) { }


  addNewParc(body:any){
    return this.http.post('http://localhost:8080/api/parc/add',body)
  }

  
  getParcs(){
    return this.http.get('http://localhost:8080/api/parc/list')
  }


}

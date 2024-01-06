import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employees:any[] = [];

  constructor() { }

  add(e:any){
    this.employees.push(e);
  }

  getEmployees(){
   return this.employees;
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit {

  employees:any[] = [];

  constructor( private employeeService:EmployeesService ) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }


}

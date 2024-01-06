import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('',  [Validators.required, Validators.minLength(8)])
  });



  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
  }

  // get data from the form !!!!
  submitForm(){
      // get data from the form !!
    const data = this.addEmployeeForm.value;

    this.employeeService.add(data);
    
    
  }

}

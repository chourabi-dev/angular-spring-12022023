import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
    
  })
  
  constructor(private router:Router,private api:ClientService) { }

  ngOnInit(): void {
  }

  save(){
    const body =this.form.value;

    this.api.add(body).toPromise().then((res:any)=>{
      if( res.success == true ){
        this.router.navigateByUrl('/client');
      }
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParcServiceService } from '../parc-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    
  })
  constructor( private parcService:ParcServiceService,private router:Router ) { }

  ngOnInit(): void {
  }

  save(){
    const body = this.form.value;

    console.log(body);

    this.parcService.addNewParc(body).toPromise().then((res:any)=>{
      console.log(res);
      if( res.success == true  ){
        this.router.navigateByUrl('/parc');
      }
      
    }).catch((err)=>{
      console.log(err);
      
    })
    
  }

}

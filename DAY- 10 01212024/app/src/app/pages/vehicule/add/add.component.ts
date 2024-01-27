import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehiculeService } from '../vehicule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form = new FormGroup({
    mark: new FormControl('',Validators.required),
    model: new FormControl('',Validators.required),
    color: new FormControl('',Validators.required),
    vin: new FormControl('',Validators.required),
    parc: new FormControl('',Validators.required),
    immatriculation: new FormControl('',Validators.required),
    
  })

  parcs:any[] = [];

  constructor(private api:VehiculeService,private router:Router) { }

  ngOnInit(): void {
    this.api.getParcs().toPromise().then((res:any)=>{
      console.log(res);

      this.parcs = res;
      
    })
  }


  save(){
    const body = this.form.value;

    this.api.add(body).toPromise().then((res:any)=>{
      if( res.success == true ){
        this.router.navigateByUrl('/vehicule');
      }
    })
  }

}

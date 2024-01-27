import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.css']
})
export class AddInterventionComponent implements OnInit {
  idClient:any;

  cars:any[] = [];

  form = new FormGroup({
    decreption: new FormControl('',Validators.required),
    vehicule: new FormControl('',Validators.required)
  })


  success:string = '';

  constructor(private route:ActivatedRoute, private api:ClientService) { }

  ngOnInit(): void {
    this.idClient = this.route.snapshot.params['id'];

    console.log(this.idClient);


    this.getCars();
    
  }

  save(){
    const i = {
      decreption:this.form.value.decreption,
      vehicule:this.form.value.vehicule,
      client:this.idClient
    }


    this.api.addIntervention(i).toPromise().then((res:any)=>{
      if( res.success == true ){
        this.success = res.message;

        // RESET FORM
        this.form.reset();

      }
    })

  }


  getCars(){
    this.api.getCars().toPromise().then((res:any)=>{
      this.cars = res;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../vehicule.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  vehicules:any[] = [];

  constructor(private  api:VehiculeService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.api.list().toPromise().then((res:any)=>{
      console.log(res);
      this.vehicules = res;
      
    })
  }

}

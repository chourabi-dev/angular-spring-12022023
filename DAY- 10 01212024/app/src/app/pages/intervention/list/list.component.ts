import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data:any[] = [];
  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getListIntervention().toPromise().then((res:any)=>{
      console.log(res);

      this.data = res;
      
    })
  }

}

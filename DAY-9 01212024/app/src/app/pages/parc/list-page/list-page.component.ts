import { Component, OnInit } from '@angular/core';
import { ParcServiceService } from '../parc-service.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  parcs:any[] = [];


  constructor(private parc:ParcServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.parc.getParcs().toPromise().then((res:any)=>{
      this.parcs = res;
    })
  }

}

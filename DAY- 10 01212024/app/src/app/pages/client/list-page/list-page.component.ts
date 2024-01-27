import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  clients:any[] = [];
  constructor(private api:ClientService) { }

  ngOnInit(): void {
    this.getDATAFromSerevr()
  }


  getDATAFromSerevr(){
     
     // this will open a stream with the server !!
      this.api.list().subscribe((res:any)=>{
        this.clients = res
      })

      /*
      this will be exucted one time
      .toPromise().then((res:any)=>{
        console.log(res);
        
        this.clients = res;
      })*/  
  }

}

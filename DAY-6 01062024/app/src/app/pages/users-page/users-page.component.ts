import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  loading:boolean = false;
  error:boolean = false;

  users:any[] = [];

  constructor(private api:ApiService) { }


  // function ? when it starts ? once the component is on the screen !! it starts !!
  ngOnInit(): void {
    this.getDataFromServer();
  }


  getDataFromServer(){
    this.loading = true;

    this.api.getUsers().subscribe( (res:any)=>{
      console.log(res);
      
      this.users = res;
      this.loading = false;
    },(err)=>{
      this.loading = false;
    })

  }

}

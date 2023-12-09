import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppin-list',
  templateUrl: './shoppin-list.component.html',
  styleUrls: ['./shoppin-list.component.css']
})
export class ShoppinListComponent implements OnInit {

  list:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  typing(event:KeyboardEvent){

    const value = event.target.value;

    console.log( event.code );

    if( event.code == 'Enter' ){
      this.list.push(value);

      event.target.value= '';

      // API ...
    }
    
  }



}

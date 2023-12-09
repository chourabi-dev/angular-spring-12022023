import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  /*employee:string = "chourabi taher";

  title;

  username:string;

  email:any;

  
  year = 2023;

  pi:number = 3.14;

  isClosed:boolean = true;

  employees:string[] = [
    'chourabi taher',
    'jason sthaem',
    'john wick'
  ]
  
  date:Date = new Date();

  user:any = { fullname:'chourabi taher', email:'tchourabi@gmail.com' };



  products:any = [
    { title:"HP pavllion", price:3000, quantity:125 },
    { title:"Asus p7", price:2500, quantity:10 },
    { title:"Asus p7", price:2500, quantity:10 },
    { title:"Asus p7", price:2500, quantity:10 },
    { title:"Asus p7", price:2500, quantity:10 },
    { title:"Asus p7", price:2500, quantity:10 },
    { title:"Asus p7", price:2500, quantity:10 }
  ];*/




  // day 2


  employees:Employee[] = [
    { fullname:'chourabi taher', email:'tchourabi@gmail.com', year:2000 },
    { fullname:'chourabi taher', email:'tchourabi@gmail.com', year:2002 },
    { fullname:'chourabi taher', email:'tchourabi@gmail.com', year:2005 },
    { fullname:'chourabi taher', email:'tchourabi@gmail.com', year:2010 },
    { fullname:'chourabi taher', email:'tchourabi@gmail.com', year:2023 },
    
  ]


  photoURL:string = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701561600&semt=sph';




  content:string = '<h1>hello world</h1>';















}

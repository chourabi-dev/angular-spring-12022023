import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  email:string = 'chourabi@yahoo.fr';



  articles:any[] = [
    { title:'angular spring', likes:25 },
    { title:'angular spring', likes:12 },
    { title:'angular spring', likes:18 },
    { title:'angular spring', likes:30 }
  ]


  x:number=0;
  y:number=0;
  


  mouseIsMoving(event:MouseEvent){
    console.log(event.clientX,event.clientY);
    this.x = event.clientX - 40;
    this.y = event.clientY - 40;
  }





}

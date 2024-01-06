import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  startWatching(){
    this.watchDeleveryGuyPostion().subscribe((data)=>{
        console.log(data);
        
    },(err)=>{
      
    })
  }














  watchDeleveryGuyPostion(){
    let observable = new Observable( (observer)=>{

      // contact with the cloud !!

      navigator.geolocation.watchPosition((res)=>{
        observer.next(res);
      },(err)=>{
        observer.error(err);
      })
     

    });


    return observable;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-demo',
  templateUrl: './promise-demo.component.html',
  styleUrls: ['./promise-demo.component.css']
})
export class PromiseDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCamera();
  }




  // 100% the promise will give us a success result !!
  /*async initCamera()  {
    let camera = await  this.getCamera();

    console.log("bonjour");
    console.log(camera);
    
  }*/


  initCamera(){
    this.getCamera().then( (res)=>{
      console.log(res);
      
    } ).catch((err)=>{
      console.log(err);
      
    });
  }



  getCamera(){

    let promise = new Promise(( success,failure )=>{
      
      setTimeout(()=>{
        failure( { camera:false } );
      },4000)

    })

    return promise;
  }

}

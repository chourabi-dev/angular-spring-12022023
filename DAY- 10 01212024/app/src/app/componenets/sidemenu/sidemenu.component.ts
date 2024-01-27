import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  menu:any[] = [
    { 
      name:"Parc",
      route:"/parc"
    },
    { 
      name:"Client",
      route:"/client"
    },
    { 
      name:"Vehicules",
      route:"/vehicule"
    },
    { 
      name:"Interventions",
      route:"/interventions"
    },
    
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

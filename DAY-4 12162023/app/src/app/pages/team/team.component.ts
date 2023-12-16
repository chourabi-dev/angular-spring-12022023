import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  employees:any[] = [
    { id:1, name:"chourabi taher" },
    { id:2, name:"john wick" },
    { id:3, name:"jason stathem" },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

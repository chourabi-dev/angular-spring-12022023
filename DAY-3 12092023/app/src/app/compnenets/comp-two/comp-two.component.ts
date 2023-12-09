import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {
  today:Date = new Date();

  
  constructor() { }

  ngOnInit(): void {
  }




}

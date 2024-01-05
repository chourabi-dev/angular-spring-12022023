import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  images:any[] = [];

  constructor(private service:PanierService) { }

  ngOnInit(): void {
    this.images = this.service.panier;
  }

}

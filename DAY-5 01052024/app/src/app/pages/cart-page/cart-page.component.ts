import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  products:any[] = [];

  constructor(private panier:PanierService) { }

  ngOnInit(): void {
    this.products = this.panier.panier;
  }

}

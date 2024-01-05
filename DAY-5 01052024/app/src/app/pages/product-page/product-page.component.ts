import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products:any[] = [
    { id:1, name:'Hp paviilion 1', price:2500, photoURL:'https://www.tunisianet.com.tn/148608-large/pc-portable-hp-pavilion-gaming-15-dk0017nk-i5-9e-gen-8-go-sim-orange-offerte-30-go.jpg' },
    { id:2, name:'Hp paviilion 2', price:2500, photoURL:'https://www.tunisianet.com.tn/148608-large/pc-portable-hp-pavilion-gaming-15-dk0017nk-i5-9e-gen-8-go-sim-orange-offerte-30-go.jpg' },
    { id:3, name:'Hp paviilion 3', price:2500, photoURL:'https://www.tunisianet.com.tn/148608-large/pc-portable-hp-pavilion-gaming-15-dk0017nk-i5-9e-gen-8-go-sim-orange-offerte-30-go.jpg' },
    { id:4, name:'Hp paviilion 4', price:2500, photoURL:'https://www.tunisianet.com.tn/148608-large/pc-portable-hp-pavilion-gaming-15-dk0017nk-i5-9e-gen-8-go-sim-orange-offerte-30-go.jpg' },
    { id:5, name:'Hp paviilion 5', price:2500, photoURL:'https://www.tunisianet.com.tn/148608-large/pc-portable-hp-pavilion-gaming-15-dk0017nk-i5-9e-gen-8-go-sim-orange-offerte-30-go.jpg' }
  ]



  constructor(private panierService:PanierService) { }

  ngOnInit(): void {
  }



  addToCart(product:any){
    // i need to call to service !! ?
    // why ? to save data !!

    this.panierService.add(product);
  }

}

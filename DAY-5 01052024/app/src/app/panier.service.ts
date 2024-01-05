import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier:any[] = [];



  constructor() { }


  add(product:any){
    console.log("product added !!");
    
    this.panier.push(product);
  }
}

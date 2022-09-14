import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css'],
})
export class AddtocartComponent implements OnInit {
  public price: number = 0;
  public name: string = '';
  public quntity: number = 0;
  public products: Products[] = [];
  public totalamount:number=0;
  constructor() {}

  ngOnInit(): void {}
  add() {
    this.products.push({
      name: this.name,
      price: this.price,
      quntity: this.quntity,
    });
  this.total()
  }
  clear() {
    this.products = [];
  }

  delete(i: number) {
    this.products.splice(i, 1);
  }
  lowetohighe() {
    this.products = this.products.sort((a, b) => a.price - b.price);
  }
  highetolowe() {
    this, (this.products = this.products.sort((a, b) => b.price - a.price));
  }

total(){
  this.totalamount = 0;
  for (let product of this.products)
    this.totalamount = this.totalamount + product.price * product.quntity;
}  
}

import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public name: string = '';
  public price: number = 0;
  public quntity: number = 0;
  public totalAmount:number=0;
  public products: Products[] = [];
  constructor() {}

  ngOnInit(): void {}

  add() {
    this.products.push({
      name: this.name,
      price: this.price,
      quntity: this.quntity,
    });
    this.total();
  }

  delete(i: number) {
    this.products.splice(i, 1);
  }

  clear() {
    this.products = [];
  }

  lowetohighe() {
    this.products = this.products.sort((a, b) => a.price - b.price);
  }

  highetolowe(){
    this.products = this.products.sort((a, b) => b.price - a.price)
}
total(){
  this.totalAmount=0;
  for (let product of this.products)
  this.totalAmount = this.totalAmount + product.price * product.quntity;
}
}

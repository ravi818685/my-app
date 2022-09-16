import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

public cartcount:number=0;


  constructor(private _cartService:CartService) { }

  ngOnInit(): void {
  }


add(){
  this.cartcount=this.cartcount+1
  this._cartService.setValue(this.cartcount)
}

}

import { Component, OnInit } from '@angular/core';
import { Productofitems } from '../productofitems';
import { ProductofitemsService } from '../productofitems.service';
import { Products } from '../products';

@Component({
  selector: 'app-productofitems',
  templateUrl: './productofitems.component.html',
  styleUrls: ['./productofitems.component.css'],
})
export class ProductofitemsComponent implements OnInit {
  public productofitems:Productofitems[]=[]

  constructor(private _productofitemsService: ProductofitemsService) {
    this._productofitemsService.getproductdetails().subscribe(
      (data: any) => {
        this.productofitems = data;
      },
      (err: any) => {
        alert('inernal servior Error');
      }
    );
  }

  ngOnInit(): void {}
}

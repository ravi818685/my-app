import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productofitems } from './productofitems';

@Injectable({
  providedIn: 'root',
})
export class ProductofitemsService {
  constructor(private _httpClient: HttpClient) {}
  getproductdetails():Observable<Productofitems[]>{
    return this._httpClient.get<Productofitems[]>('https://fakestoreapi.com/products')
  }
}

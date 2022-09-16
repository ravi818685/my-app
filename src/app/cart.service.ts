import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public cartscount:BehaviorSubject<any>=new BehaviorSubject(0);


  constructor() { }

setValue(value:any){
  this.cartscount.next(value);
}

getValue(){
  return this.cartscount.asObservable();
}

}

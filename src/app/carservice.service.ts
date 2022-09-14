import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  public message:string='this message from service'
  constructor() { }
}

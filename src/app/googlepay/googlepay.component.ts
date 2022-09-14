import { Component, OnInit } from '@angular/core';
import { HdfcService } from '../hdfc.service';

@Component({
  selector: 'app-googlepay',
  templateUrl: './googlepay.component.html',
  styleUrls: ['./googlepay.component.css'],
})
export class GooglepayComponent implements OnInit {
  public amount: number = 0;
  public showebalanc:number=0;
  
  constructor(private _HdfcService: HdfcService) {}

  withdraw() {
    this._HdfcService.withdraw(this.amount)
  }
  deposite() {
    this._HdfcService.deposite(this.amount)
  }

  showebalance() {
    this.showebalanc=(this._HdfcService.getbalance())
  }
  ngOnInit(): void {}
}

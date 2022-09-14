import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  public number1: number = 0;
  public number2: number = 0;
  public result:number=0

  length() {
    this.result = this.number1 * this.number2;;
  }
  parameter() {
this.result=2*(this.number1+this.number2)
  }
  constructor() {}

  ngOnInit(): void {}
}

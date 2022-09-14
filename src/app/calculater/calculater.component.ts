import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculater',
  templateUrl: './calculater.component.html',
  styleUrls: ['./calculater.component.css']
})
export class CalculaterComponent implements OnInit {
public number1:number=0
public number2:number=0
public result:number=0
sum(){
  this.result=this.number1+this.number2;
}
sub(){
this.result=this.number1-this.number2;
}
divison(){
this.result = this.number1 / this.number2;
}
  constructor() { }

  ngOnInit(): void {
  }
multi(){
this.result = this.number1 * this.number2;
}

}

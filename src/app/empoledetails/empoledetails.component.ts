import { Component, OnInit } from '@angular/core';
import { Empolyeobject } from '../empolyeobject';

@Component({
  selector: 'app-empoledetails',
  templateUrl: './empoledetails.component.html',
  styleUrls: ['./empoledetails.component.css'],
})
export class EmpoledetailsComponent implements OnInit {
  public name: string = '';
  public age: number = 0;
  public companyname: string = '';
  public package: number = 0;
  public totalprice:number=0;
  public intialamount:number=0;



  public empolyeobjects: Empolyeobject[] = [];

  constructor() {}
  add() {
    this.empolyeobjects.push({
      name: this.name,
      age: this.age,
      companyname: this.companyname,
      package: this.package,
    
    });
  this.totall()  
  }

  delete(i: number) {
    this.updatebalnce(this.empolyeobjects[i].package);
    this.empolyeobjects.splice(i, 1);

  }

  deleteall() {
    this.empolyeobjects = [];
    this.totalprice=this.intialamount
  }

  highetolowe() {
    this.empolyeobjects.sort((a,b)=>b.package-a.package)
  }
  lowetohighe(){
this.empolyeobjects.sort((a, b) => a.package - b.package);
  }

totall(){
  this.totalprice = this.totalprice+(this.package)
}
updatebalnce(p:number){
  this.totalprice=this.totalprice-p;
}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentregistration1n',
  templateUrl: './studentregistration1n.component.html',
  styleUrls: ['./studentregistration1n.component.css']
})
export class Studentregistration1nComponent implements OnInit {
public name:string='';
public names:string[]=[];


  constructor() { }

  ngOnInit(): void {
  }
add(){
  this.names.push(this.name);
}
deletea(){
   this.names.pop();
}
revers(){
   this.names.reverse();
}
deleteall(){
this.names=[]
}
deleteEach(i:number){
this.names.splice(i,1)
}
}

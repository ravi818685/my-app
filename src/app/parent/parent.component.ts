import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
public pa:string=''
public na:number=0
public b:string=''
  constructor() { }

  ngOnInit(): void {
  }

catch(value:any){
this.b=value
}

}

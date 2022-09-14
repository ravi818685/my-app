import { Component, OnInit } from '@angular/core';
import { Empolye } from '../empolye';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

public age:number=6856;
public name:string="reddy";
public isindia:boolean=true;
public phones:number[]=[122,54,654];
public courses:string[]=["angular","reactjs"]

public user:User[]=[
  {name:"ravi",city:"hyderabade"},
  {name:"kumar",city:"ts"},
  {name:"sai",city:"ap"},
];

public student:Student[]=[{name:"ravi",
city:"ap",marks:220},
{name:"kumar",city:"ts",marks:500},
{name:"sai",city:"ts",marks:200}
]

public employedetails:Empolye={
  name:"ravi",
  company:"tcs",
  package:45000
}
  constructor() { }

  ngOnInit(): void {
  }

}

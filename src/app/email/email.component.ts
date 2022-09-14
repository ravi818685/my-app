import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  public emaildetals: Email[]=[];
  constructor(private _EmailService: EmailService) {
this._EmailService.emaildetails().subscribe(
  (data:any)=>{
this.emaildetals=data
  },

(err:any)=>{
  alert("internal servior err")
}
)
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Accountdetails } from '../accountdetails';
import { AccountdetailsService } from '../accountdetails.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css'],
})
export class AccountdetailsComponent implements OnInit {
  public accountdetails: Accountdetails[] = [];
  public userenter:string='';

  constructor(private _AccountdetailsService: AccountdetailsService) {
    this._AccountdetailsService.getaccountdetails().subscribe(
      (data: any) => {
        this.accountdetails = data;
      },
      (err: any) => {
        alert('internal servier error');
      }
    );
  }

  ngOnInit(): void {}

  delet(id: string) {
    this._AccountdetailsService.delet(id).subscribe(
      (data: any) => {
        alert('deleted succesfully'),location.reload()
      },
      (err: any) => {
        alert('internal servier error');
      }
    );
  }

filter(){
  this._AccountdetailsService.filter(this.userenter).subscribe(
(data: any) => {
        this.accountdetails=data
      },
      (err: any) => {
        alert('internal servier error');
      }
    );

  
}






}

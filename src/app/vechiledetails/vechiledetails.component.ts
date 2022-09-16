import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vechile } from '../vechile';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vechiledetails',
  templateUrl: './vechiledetails.component.html',
  styleUrls: ['./vechiledetails.component.css'],
})
export class VechiledetailsComponent implements OnInit {
  public vechile: Vechile = <Vechile>{};

  constructor(
    private _vechileService: VechileService,
    private _activatedRoute: ActivatedRoute) {
      this._activatedRoute.params.subscribe(
      (data:any)=>{
      this.getVechile(data.id)
      }

      )
    }

  ngOnInit(): void {}

  getVechile(id: string) {
    this._vechileService.getVechile(id).subscribe((data: any) => {
      this.vechile = data;
    });
  }
}

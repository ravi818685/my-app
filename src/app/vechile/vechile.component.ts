import { Component, OnInit } from '@angular/core';
import { Vechile } from '../vechile';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vechile',
  templateUrl: './vechile.component.html',
  styleUrls: ['./vechile.component.css'],
})
export class VechileComponent implements OnInit {
  public vechiles: Vechile[] = [];
  public filterTerm: string = '';
  

  public coloum:string=''
  public order:string=''

  constructor(private _VechileService: VechileService) {
    this._VechileService.getVechiles().subscribe(
      (data: any) => {
        this.vechiles = data;
      },
      (err: any) => {
        alert('internal server eroor');
      }
    );
  }

  ngOnInit(): void {}
  delet(id: string) {
    this._VechileService.delet(id).subscribe(
      (data: any) => {
        alert('deleted succesfully'), location.reload();
      },
      (err: any) => {
        alert('internal server eroor');
      }
    );
  }

  filter() {
    this._VechileService.filterof(this.filterTerm).subscribe(
      (data: any) => {
        this.vechiles = data;
      },
      (err: any) => {
        alert('internal server eroor');
      }
    );
  }
  sort(){
    this._VechileService.getsort(this.coloum,this.order).subscribe(
      (data: any) => {
        this.vechiles = data;
      },
      (err: any) => {
        alert('internal server eroor');
      }
    )
  }
  

  page(pagNo: number) {
    this._VechileService.pagination(pagNo).subscribe(
      (data: any) => {
        this.vechiles=data
      },
      (err: any) => {
        alert('internal server eroor');
      }
    );
  }
}

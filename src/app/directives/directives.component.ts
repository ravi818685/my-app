import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../carservice.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  public car: string = '';
  public message: string = '';

  constructor(private _carService: CarserviceService) {
    this.message = this._carService.message;
  }

  ngOnInit(): void {}
}

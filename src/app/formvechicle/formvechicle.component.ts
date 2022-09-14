import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Vechile } from '../vechile';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-formvechicle',
  templateUrl: './formvechicle.component.html',
  styleUrls: ['./formvechicle.component.css']
})
export class FormvechicleComponent implements OnInit {

public vehicleForm:FormGroup=new FormGroup({
  Vehicle:new FormControl(),
  manufacturer:new FormControl(),
  model:new FormControl(),
  type:new FormControl(),
  fuel:new FormControl(),
  color:new FormControl(),

})



public vechiles: Vechile[] = [];
constructor(private _vechileService:VechileService) { 

}

submit(){
  console.log(this.vehicleForm.value)
  this._vechileService.createvehile(this.vehicleForm.value).subscribe(
    (data:any)=>{
alert('created sucssfully')
    },
    (err:any)=>{
      alert('internal servior error')
    }
  )
}







  ngOnInit(): void {
  }

}

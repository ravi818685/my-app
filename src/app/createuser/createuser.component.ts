import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css'],
})
export class CreateuserComponent implements OnInit {
  public createuser: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    age: new FormControl('',[Validators.required,Validators.min(5),Validators.max(55)]),
    phone: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{12,}$')]),
    address: new FormGroup({
      state: new FormControl(),
      pin: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    
    cards: new FormArray([]),
    payment:new FormControl(),
    car:new FormControl(),
    upi:new FormControl(),
  });

  get cardsFormArry() {
    return this.createuser.get('cards') as FormArray;
  }

  constructor() {}

  submit() {
    this.createuser.markAllAsTouched();
    console.log(this.createuser.value);
  }

  add() {
    this.cardsFormArry.push(
      new FormGroup({
        number: new FormControl(),
        Expirey: new FormControl(),
        cvv: new FormControl('',[Validators.required,Validators.min(100),Validators.max(999)]),
      })
    );
  }
  remove(i: number) {
    this.cardsFormArry.removeAt(i);
  }
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

submit(){
  alert("submit clicked");
}

test(){
  alert("key up")
}
test1(){
  alert("key down")
}
test2(){
  alert("key press")
}

test3(){
alert("mouse enter")
}

cancel(){
  alert("cancel double called")
}

test4(){
  alert("mouse leave")
}






}

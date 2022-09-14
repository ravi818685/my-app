import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighelates]'
})
export class HighelatesDirective {

  constructor(private _elementRef:ElementRef) { 
    this._elementRef.nativeElement.style.color='yellow';
  }

}

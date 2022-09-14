import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipes'
})
export class CustompipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "RS."+value +"/";
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agepipes'
})
export class AgepipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+" YEARS";
  }

}

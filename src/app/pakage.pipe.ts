import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pakage'
})
export class PakagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+" LPA";
  }

}

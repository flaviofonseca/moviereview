import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notamedia'
})
export class NotaMediaPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return value.toFixed(1);
  }

}

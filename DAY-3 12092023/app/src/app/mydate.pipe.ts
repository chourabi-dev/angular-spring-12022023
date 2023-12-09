import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate' 
})
export class MydatePipe implements PipeTransform {

  transform(date: Date, ...args: unknown[]): unknown {
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  }

}

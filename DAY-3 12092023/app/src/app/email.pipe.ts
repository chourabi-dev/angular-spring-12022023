import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(email: string, ...args: unknown[]): unknown {
    return  email[0]+'*************@'+email.split('@')[1];
  }

}

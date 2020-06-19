import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPrefix'
})
export class UserPrefixPipe implements PipeTransform {

  transform(value: any, gender: string): any {
    if (gender === 'M') {
      return `Mr. ${value}`;
    }
    return `Miss. ${value}`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any): any{
    if (value && value.length > 0) {
      return `${value[0].toUpperCase()}${value.substr(1)}`;
    }
  }

}

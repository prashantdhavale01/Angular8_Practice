import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderColor'
})
export class GenderColorPipe implements PipeTransform {

  transform(value: any, gender: string): any {
    if (gender == "M") {
      return `<span class="color-blue">${value}</span>`;
    } else {
      return `<span class="color-pink">${value}</span>`;
    }
  }

}

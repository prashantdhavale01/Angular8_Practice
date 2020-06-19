import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {

  transform(value: any, gender: string): unknown {
    if (gender == 'M') {
      return `<span class='color-blue'>${value}</span>`;
    }
    return `<span class='color-red'>${value}</span>`;
  }

}

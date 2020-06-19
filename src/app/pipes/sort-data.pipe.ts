import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData',
  pure: false
})
export class SortDataPipe implements PipeTransform {

  transform(value: any, sortConfig): any {
    let columName = sortConfig.columName;
    let columType = sortConfig.columType;
    let orderBy = sortConfig.orderBy;
    return value.sort((e1, e2) => {
      if (columType === 'num' || columType === 'caseSensitive') {
        return e1[columName] > e2[columName] ? -1 * orderBy : 1 * orderBy;
      }
      else if (columType === 'caseInSensitive') {
        console.log(e1[columName]);
        return e1[columName].toLowerCase() > e2[columName].toLowerCase() ? -1 * orderBy : 1 * orderBy;
      }
      else if (columType === 'date') {
        let dateArr1 = e1[columName].split('/');
        var date1 = new Date(`${dateArr1[2]}/${dateArr1[1]}/${dateArr1[0]}`);
        let dateArr2 = e2[columName].split('/');
        var date2 = new Date(`${dateArr2[2]}/${dateArr2[1]}/${dateArr2[0]}`);
        return date1 > date2 ? -1 * orderBy : 1 * orderBy;
      }
      else {
        return e1[columName] > e2[columName] ? -1 * orderBy : 1 * orderBy;
      }
    })
  }

}

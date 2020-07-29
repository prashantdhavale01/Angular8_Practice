import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterConfig): any {
    let filter = filterConfig.filter;
    let rows = value;

    for (let key in filter) {
      let columnName = filter[key].columnName;
      let value = filter[key].value;
      let columnType = filter[key].columnType;
      let customLogic = filter[key].customLogic;
      rows = rows.filter((e) => {
        if (!value) {
          return true;
        }
        if (customLogic) {          
          return customLogic(e, value)
        }
        if (columnType === 'num') {          
          return e[columnName].toString().indexOf(value) > -1;          
        }
        else if (columnType === 'cistr') {
          return e[columnName].toLowerCase().indexOf(value.toLowerCase()) > -1;
        }
        else if (columnType === 'numGT') {
          return e[columnName] >= value;
        }
        else if (columnType === 'numLT') {
          return e[columnName] <= value;
        }
        else if (columnType === 'dob') {
          console.log(columnType)
          console.log(e[columnName])
          console.log(value)
          console.log(e[columnType])
          return e[columnName].toString().indexOf(value) > -1;
        }
      })
    }
    return rows;
  }
}

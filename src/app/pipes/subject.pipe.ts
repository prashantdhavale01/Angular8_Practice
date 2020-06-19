import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subject'
})
export class SubjectPipe implements PipeTransform {
  subjectList = [
    {
      id: 1,
      name: 'React'
    },
    {
      id: 2,
      name: 'Angular'
    },
    {
      id: 3,
      name: 'VueJs'
    },
    {
      id: 4,
      name: 'Java'
    },
    {
      id: 5,
      name: 'Ruby'
    },
    {
      id: 6,
      name: 'Python'
    },
    {
      id: 7,
      name: 'JavaScript'
    }
  ];
  transform(value: any): any {
    let index = this.subjectList.findIndex((e) => {
      return e.id == value;
    });
    if (index > -1) {
      return this.subjectList[index].name;
    }
    else {
      return 'NA';
    }    
  }
}

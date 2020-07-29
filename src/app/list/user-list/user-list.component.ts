import { Component, OnInit } from '@angular/core';
import { CamelCasePipe } from '../../pipes/camel-case.pipe';
import { UserPrefixPipe } from '../../pipes/user-prefix.pipe';
import { Subject } from 'rxjs';
import { SubjectPipe } from '../../pipes/subject.pipe';
import { SharedUtil } from '../../shared-util/shared-util';
import { GenderPipe } from '../../pipes/gender.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {  
  userList = [{
      id: 1,
      firstName: 'Prashant',
      lastName: 'Dhavale',
      gender: 'M',
      age: 22,
      dob: '22/10/1992',
      subject: 1,
      salary: 30000,
      logo: 'assets/images/users/avatar-2.jpg'
  },
  {
      id: 2,
      firstName: 'Akshay',
      lastName: 's',
      gender: 'M',
      age: 18,
      dob: '16/07/1994',
      subject: 2,
      salary: 55000,
      logo: 'assets/images/users/avatar-1.jpg'
   },
  {
      id: 3,
      firstName: 'Ganesh',
      lastName: 'Kasar',
      gender: 'M',
      age: 38,
      dob: '02/09/1982',
      subject: 3,
      salary: 25000,
      logo: 'assets/images/users/avatar-1.jpg'
   },
  {
      id: 4,
      firstName: 'Abhay',
      lastName: 'V',
      gender: 'M',
      age: 28,
      dob: '30/02/1988',
      subject: 4,
      salary: 15000,
      logo: 'assets/images/users/avatar-2.jpg'
   },
  {
      id: 5,
      firstName: 'Siddesh',
      lastName: 'Tari',
      gender: 'M',
      age: 27,
      dob: '01/05/1991',
      subject: 5,
      salary: 10000,
      logo: 'assets/images/users/avatar-1.jpg'
   },
  {
      id: 6,
      firstName: 'Aishwarya',
      lastName: 'N',
      gender: 'F',
      age: 16,
      dob: '04/04/1995',
      subject: 6,
      salary: 60000,
      logo: 'assets/images/users/avatar-4.jpg'
    },
    {
      id: 7,
      firstName: 'Priya',
      lastName: 'Dighade',
      gender: 'F',
      age: 15,
      dob: '05/10/1993',
      subject: 7,
      salary: 45000,
      logo: 'assets/images/users/avatar-3.jpg'
    }
  ];

  /*orderBy = -1;
  columName = 'id';
  columType = 'num';*/

  sortConfig = {
    orderBy : -1,
    columName : 'id',
    columType: 'num',
    customLogic: undefined
  }

  sortFunc(columName, columType) {
    this.sortConfig.orderBy = this.sortConfig.orderBy * -1;
    /*let orderBy = this.orderBy;*/
    this.sortConfig.columName = columName;
    this.sortConfig.columType = columType;
    
    if (columName == "firstName") {
      //u.firstName | camelCase | userPrefix:u.gender | genderColor:u.gender
      /*let utlity = new SharedUtil();
      this.sortConfig.customLogic = utlity.firstNameSort;*/
      this.sortConfig.customLogic = SharedUtil.firstNameSort;

    }
    else if(columName == "subject") {
      //u.firstName | camelCase | userPrefix:u.gender | genderColor:u.gender
      /*let utlity = new SharedUtil();
      this.sortConfig.customLogic = utlity.subjectSort;*/
      this.sortConfig.customLogic = SharedUtil.firstNameSort;
    }
    else {
      this.sortConfig.customLogic = undefined;
    }

      /*this.userList.sort((e1, e2) => {
        if (columType === 'num' || columType === 'caseSensitive') {
          return e1[columName] > e2[columName] ? -1 * orderBy : 1 * orderBy;
        }
        else if (columType === 'caseInSensitive') {
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
      })*/

      /*if (columName === 'id') {
          this.userList.sort(function (e1, e2) {
            return e1.id > e2.id ? -1 * orderBy : 1 * orderBy;
          })
        } else if (columName === 'firstName') {
          this.userList.sort(function (e1, e2) {
            return e1.firstName > e2.firstName ? -1 * orderBy : 1 * orderBy;
          })
        }*/
  };

  filterConf = {
    data: this.userList,
    rows: this.userList,
    filter: {
      'id': {
        columnName: 'id',
        columnType: 'num',
        value: '',
        customLogic: undefined
      },
      'firstName': {
        columnName: 'firstName',
        columnType: 'cistr',
        value: '',
        customLogic: (e1, value) => {
          let cs = new CamelCasePipe();
          let ut = new UserPrefixPipe();
          let val1 = cs.transform(e1.firstName);
          val1 = ut.transform(val1, e1.gender);
          return val1.toLowerCase().indexOf(value.toLowerCase()) > -1;
        }
      },
      'lastName': {
        columnName: 'lastName',
        columnType: 'cistr',
        value: '',
        customLogic: undefined
      },
      'gender': {
        columnName: 'gender',
        columnType: 'cistr',
        value: '',
        customLogic: (e, value) => {
          let gp = new GenderPipe();
          let val = gp.transform(e.gender);
          return val.toLowerCase().indexOf(value.toLowerCase()) > -1;
        }
      },
      'ageGT': {
        columnName: 'age',
        columnType: 'numGT',
        value: '',
        customLogic: undefined
      },
      'ageLT': {
        columnName: 'age',
        columnType: 'numLT',
        value: '',
        customLogic: undefined
      },
      'date': {
        columnName: 'dob',
        columnType: 'dob',
        value: '',
        customLogic: undefined
      },
      'salary': {
        columnName: 'salary',
        columnType: 'num',
        value: '',
        customLogic: undefined
      },
      'subject': {
        columnName: 'subject',
        columnType: 'cistr',
        value: '',
        customLogic: (e, value) => {
          let sp = new SubjectPipe();
          let val = sp.transform(e.subject); 
          return val.toLowerCase().indexOf(value.toLowerCase()) > -1;
        }
      },
    }
  }

  search(val, name) {
    console.log(val);
    console.log(name);
    this.filterConf.filter[name].value = val;    
    //this.filterConf.rows = rows;    
  }

  constructor() { }
  ngOnInit(): void {
  }

}

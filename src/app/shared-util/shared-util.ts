import { CamelCasePipe } from '../pipes/camel-case.pipe';
import { UserPrefixPipe } from '../pipes/user-prefix.pipe';
import { SubjectPipe } from '../pipes/subject.pipe';

export class SharedUtil {
  static firstNameSort = (e1, e2, sortConfig) => {
    let cs = new CamelCasePipe();
    let ut = new UserPrefixPipe();
    let val1 = cs.transform(e1.firstName);
    val1 = ut.transform(val1, e1.gender);

    let val2 = cs.transform(e2.firstName);
    val2 = ut.transform(val2, e2.gender);

    return val1.toLowerCase() > val2.toLowerCase() ? -1 * sortConfig.orderBy : 1 * sortConfig.orderBy;
  };
  static subjectSort = (e1, e2, sortConfig) => {
    let sp = new SubjectPipe();
    let val1 = sp.transform(e1.subject);
    let val2 = sp.transform(e2.subject);
    return val1 > val2 ? -1 * sortConfig.orderBy : 1 * sortConfig.orderBy;
  }
}

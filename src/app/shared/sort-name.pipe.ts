import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';
// unikać inpure pipe'ów, czyli takich z pure: false
@Pipe({
  name: 'sortName',
})
export class SortNamePipe implements PipeTransform {
  transform(value: Task[], ...args: unknown[]): Task[] {
    // takie sortowanie nie działa na nowo dodane taski
    // chyba, że w to-do-list dodamy tasks.slice()
    return value.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}

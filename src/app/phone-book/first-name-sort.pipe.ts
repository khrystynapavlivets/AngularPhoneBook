import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './phone-book.component';


@Pipe({
  name: 'firstNameSort',
  standalone: true
})
export class FirstNameSortPipe implements PipeTransform {
  transform(arrPhone: Contact[], type: boolean): Contact[] {
    if (!arrPhone || arrPhone.length === 0) return [];



    if (type) {
      return arrPhone.sort((a, b) => (a.firstName > b.firstName) ? 1 : (a.firstName < b.firstName) ? -1 : 0);
    }

    return arrPhone.sort((a, b) => (a.firstName < b.firstName) ? 1 : (a.firstName > b.firstName) ? -1 : 0);
  }
}

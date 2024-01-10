import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './phone-book.component';

@Pipe({
  name: 'lastNameSort',
  standalone: true
})
export class LastNameSortPipe implements PipeTransform {

  transform(arrPhone: Contact[], type: boolean): Contact[] {
    if (!arrPhone || arrPhone.length === 0) return [];



    if (type) {
      return arrPhone.sort((a, b) => (a.lastName > b.lastName) ? 1 : (a.lastName < b.lastName) ? -1 : 0);
    }

    return arrPhone.sort((a, b) => (a.lastName < b.lastName) ? 1 : (a.lastName > b.lastName) ? -1 : 0);
  }

}

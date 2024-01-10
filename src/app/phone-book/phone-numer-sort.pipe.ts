import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './phone-book.component';

@Pipe({
  name: 'phoneNumerSort',
  standalone: true
})
export class PhoneNumerSortPipe implements PipeTransform {

  transform(arrPhone: Contact[], type: boolean): Contact[] {
    if (!arrPhone || arrPhone.length === 0) return [];



    if (type) {
      return arrPhone.sort((a, b) => (a.phoneNumber > b.phoneNumber) ? 1 : (a.phoneNumber < b.phoneNumber) ? -1 : 0);
    }

    return arrPhone.sort((a, b) => (a.phoneNumber < b.phoneNumber) ? 1 : (a.phoneNumber > b.phoneNumber) ? -1 : 0);
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './phone-book.component';

@Pipe({
  name: 'search',
  standalone: true
})

export class SearchPipe implements PipeTransform {
  transform(arrPhone: Contact[], field: string): Contact[] {
    if (!arrPhone) return [];
    if (!field) return arrPhone;
    const lowercaseField = field.toLowerCase();
    return arrPhone.filter(contact =>
      contact.firstName.toLowerCase().includes(lowercaseField) ||
      contact.lastName.toLowerCase().includes(lowercaseField) ||
      contact.phoneNumber.toLowerCase().includes(lowercaseField)
    );
  }
}

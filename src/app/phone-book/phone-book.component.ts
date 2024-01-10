import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "./search.pipe";
import { FirstNameSortPipe } from "./first-name-sort.pipe";
import { LastNameSortPipe } from "./last-name-sort.pipe";
import { PhoneNumerSortPipe } from "./phone-numer-sort.pipe";
import { log } from 'console';



export interface Contact {
  id: number,
  firstName: string,
  lastName: string,
  phoneNumber: string
}


@Component({
  selector: 'app-phone-book',
  standalone: true,
  templateUrl: './phone-book.component.html',
  styleUrl: './phone-book.component.scss',
  imports: [FormsModule, SearchPipe, FirstNameSortPipe, LastNameSortPipe, PhoneNumerSortPipe]
})


export class PhoneBookComponent {
  public field!: string;
  public id!: number;
  public isAditing: boolean = false;
  public isEditing: boolean = false;
  public isColor = false;
  public newContact: Contact = { id: 0, firstName: '', lastName: '', phoneNumber: '' };
  public editedContact: {
    id: number; firstName: string, lastName: string, phoneNumber: string
  } = { id: 0, firstName: '', lastName: '', phoneNumber: '' };
  public sortFirst = true;
  public sortLast = true;
  public sortNumber = true;
  public hideFirstName = false;
  public hideLastName = false;
  public hideNumber = false;
  public type!: boolean;


  firstSort(): void {
    this.hideFirstName = true;
    this.sortFirst = !this.sortFirst;
    this.hideLastName = !this.hideFirstName;
    this.hideNumber = !this.hideFirstName;
  }

  lastSort(): void {
    this.hideLastName = true;
    this.sortLast = !this.sortLast;
    this.hideFirstName = !this.hideLastName;
    this.hideNumber = !this.hideLastName;
  }
  numberSort(): void {
    this.hideNumber = true;
    this.sortNumber = !this.sortNumber;
    this.hideLastName = !this.hideNumber;
    this.hideFirstName = !this.hideNumber;
  }



  public regExp = {
    firstName: /^[\w \-]{0,20}$/,
    lastName: /^[\w \-]{0,20}$/,
    phoneNumber: /^[\d\+]{0,13}$/,
  };


  public contacts: Contact[] = [
    {
      id: 1,
      firstName: 'Sofia',
      lastName: 'Zhuk',
      phoneNumber: '0977777777',
    },
    {
      id: 2,
      firstName: 'Ira',
      lastName: 'Tutar',
      phoneNumber: '0636666666',
    },
    {
      id: 3,
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      phoneNumber: '0635555555',
    },
    {
      id: 4,
      firstName: 'Alejandro',
      lastName: 'Del Rio Albrechet',
      phoneNumber: '0633333333',
    },
    {
      id: 5,
      firstName: 'Petro',
      lastName: 'Petriv',
      phoneNumber: '0631222222',
    },
    {
      id: 6,
      firstName: 'Petya',
      lastName: 'Zhuk',
      phoneNumber: '0631111111',
    },
  ];



  AddPhone() {
    this.isAditing = true;
    this.isEditing = false;
  }



  editTask(id: number) {
    this.isEditing = true;
    this.isAditing = false;
    const contactToEdit = this.contacts.find(contact => contact.id === id);
    if (contactToEdit) {
      this.editedContact = { ...contactToEdit };
      console.log(this.editedContact.firstName);
    }
  }

  deleteTask(id: number): void {

    const index = this.contacts.findIndex(contact => contact.id === id);

    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }
  isFieldEmpty(field: string): boolean {
    return !field.trim();
  }
  areFieldsValid(): boolean {
    return !this.isFieldEmpty(this.newContact.firstName) &&
      !this.isFieldEmpty(this.newContact.lastName) &&
      !this.isFieldEmpty(this.newContact.phoneNumber);
  }
  isSaveDisabled(): boolean {
    return this.isAditing && !this.areFieldsValid();
  }


  saveModal(): void {
    if (
      this.regExp.firstName.test(this.newContact.firstName) &&
      this.regExp.lastName.test(this.newContact.lastName) &&
      this.regExp.phoneNumber.test(this.newContact.phoneNumber)
    ) {


      if (this.isAditing) {
        if (this.newContact.id === 0 && this.areFieldsValid()) {
          this.newContact.id = this.contacts.length + 1;
          this.contacts.push(this.newContact);
          this.isEditing = false;
          this.newContact = { id: 0, firstName: '', lastName: '', phoneNumber: '' };
          this.editedContact = { id: 0, firstName: '', lastName: '', phoneNumber: '' };
        }
      }
      this.isEditing = false;
      this.isAditing = false;
      this.newContact = { id: 0, firstName: '', lastName: '', phoneNumber: '' };
    }

  }
  changeModal(): void {
    if (
      this.regExp.firstName.test(this.editedContact.firstName) &&
      this.regExp.lastName.test(this.editedContact.lastName) &&
      this.regExp.phoneNumber.test(this.editedContact.phoneNumber)
    ) {
      if (this.isEditing) {

        const index = this.contacts.findIndex(contact => contact.id === this.editedContact.id);

        if (index !== -1) {
          this.contacts[index].firstName = this.editedContact.firstName;
          this.contacts[index].lastName = this.editedContact.lastName;
          this.contacts[index].phoneNumber = this.editedContact.phoneNumber;
        }
      }

      this.isEditing = false;
      this.isAditing = false;
    }
  }
}




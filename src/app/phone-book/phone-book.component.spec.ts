import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookComponent } from './phone-book.component';

describe('PhoneBookComponent', () => {
  let component: PhoneBookComponent;
  let fixture: ComponentFixture<PhoneBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

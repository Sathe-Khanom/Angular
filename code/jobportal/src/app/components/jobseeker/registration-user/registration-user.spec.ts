import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationUser } from './registration-user';

describe('RegistrationUser', () => {
  let component: RegistrationUser;
  let fixture: ComponentFixture<RegistrationUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEmp } from './registration-emp';

describe('RegistrationEmp', () => {
  let component: RegistrationEmp;
  let fixture: ComponentFixture<RegistrationEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationEmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationEmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

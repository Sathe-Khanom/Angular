import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmp } from './login-emp';

describe('LoginEmp', () => {
  let component: LoginEmp;
  let fixture: ComponentFixture<LoginEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginEmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

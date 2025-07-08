import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmp } from './profile-emp';

describe('ProfileEmp', () => {
  let component: ProfileEmp;
  let fixture: ComponentFixture<ProfileEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileEmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

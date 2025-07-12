import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobdetails } from './jobdetails';

describe('Jobdetails', () => {
  let component: Jobdetails;
  let fixture: ComponentFixture<Jobdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jobdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

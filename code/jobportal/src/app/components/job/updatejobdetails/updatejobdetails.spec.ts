import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatejobdetails } from './updatejobdetails';

describe('Updatejobdetails', () => {
  let component: Updatejobdetails;
  let fixture: ComponentFixture<Updatejobdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatejobdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatejobdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

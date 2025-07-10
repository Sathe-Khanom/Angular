import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobDetails } from './add-job-details';

describe('AddJobDetails', () => {
  let component: AddJobDetails;
  let fixture: ComponentFixture<AddJobDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddJobDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

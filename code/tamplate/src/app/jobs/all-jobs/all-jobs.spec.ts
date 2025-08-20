import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobs } from './all-jobs';

describe('AllJobs', () => {
  let component: AllJobs;
  let fixture: ComponentFixture<AllJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllJobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllJobs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

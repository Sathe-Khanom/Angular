import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsHeader } from './jobs-header';

describe('JobsHeader', () => {
  let component: JobsHeader;
  let fixture: ComponentFixture<JobsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobsHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllJob } from './view-all-job';

describe('ViewAllJob', () => {
  let component: ViewAllJob;
  let fixture: ComponentFixture<ViewAllJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllJob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllJob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

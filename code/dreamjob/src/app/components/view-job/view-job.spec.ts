import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJob } from './view-job';

describe('ViewJob', () => {
  let component: ViewJob;
  let fixture: ComponentFixture<ViewJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewJob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

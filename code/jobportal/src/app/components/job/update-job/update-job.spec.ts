import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJob } from './update-job';

describe('UpdateJob', () => {
  let component: UpdateJob;
  let fixture: ComponentFixture<UpdateJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateJob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateJob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

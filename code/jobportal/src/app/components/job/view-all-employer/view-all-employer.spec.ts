import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmployer } from './view-all-employer';

describe('ViewAllEmployer', () => {
  let component: ViewAllEmployer;
  let fixture: ComponentFixture<ViewAllEmployer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllEmployer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllEmployer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

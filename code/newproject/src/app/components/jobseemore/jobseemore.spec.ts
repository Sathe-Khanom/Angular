import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobseemore } from './jobseemore';

describe('Jobseemore', () => {
  let component: Jobseemore;
  let fixture: ComponentFixture<Jobseemore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jobseemore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobseemore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

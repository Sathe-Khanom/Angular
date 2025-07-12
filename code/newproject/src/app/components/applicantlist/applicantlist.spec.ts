import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Applicantlist } from './applicantlist';

describe('Applicantlist', () => {
  let component: Applicantlist;
  let fixture: ComponentFixture<Applicantlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Applicantlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Applicantlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

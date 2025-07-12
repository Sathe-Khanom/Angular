import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobapplicationlist } from './jobapplicationlist';

describe('Jobapplicationlist', () => {
  let component: Jobapplicationlist;
  let fixture: ComponentFixture<Jobapplicationlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jobapplicationlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobapplicationlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

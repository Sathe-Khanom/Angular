import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editjob } from './editjob';

describe('Editjob', () => {
  let component: Editjob;
  let fixture: ComponentFixture<Editjob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Editjob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editjob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

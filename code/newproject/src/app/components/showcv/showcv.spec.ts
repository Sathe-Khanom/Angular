import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showcv } from './showcv';

describe('Showcv', () => {
  let component: Showcv;
  let fixture: ComponentFixture<Showcv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Showcv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showcv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

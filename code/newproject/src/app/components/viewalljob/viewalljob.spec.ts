import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewalljob } from './viewalljob';

describe('Viewalljob', () => {
  let component: Viewalljob;
  let fixture: ComponentFixture<Viewalljob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewalljob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewalljob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

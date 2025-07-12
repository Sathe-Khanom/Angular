import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appliedjobs } from './appliedjobs';

describe('Appliedjobs', () => {
  let component: Appliedjobs;
  let fixture: ComponentFixture<Appliedjobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Appliedjobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appliedjobs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

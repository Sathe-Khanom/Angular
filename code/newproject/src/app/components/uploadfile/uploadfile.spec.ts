import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uploadfile } from './uploadfile';

describe('Uploadfile', () => {
  let component: Uploadfile;
  let fixture: ComponentFixture<Uploadfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Uploadfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uploadfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

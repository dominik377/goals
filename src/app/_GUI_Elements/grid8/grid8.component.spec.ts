import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid8Component } from './grid8.component';

describe('Grid8Component', () => {
  let component: Grid8Component;
  let fixture: ComponentFixture<Grid8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grid8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleCardComponent } from './doubleCard.component';

describe('DoubleCardComponent', () => {
  let component: DoubleCardComponent;
  let fixture: ComponentFixture<DoubleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

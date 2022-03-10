import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitrowDualComponent } from './splitrow-dual.component';

describe('SplitrowDualComponent', () => {
  let component: SplitrowDualComponent;
  let fixture: ComponentFixture<SplitrowDualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitrowDualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitrowDualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

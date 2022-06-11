import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsystemComponent } from './mainsystem.component';

describe('MainsystemComponent', () => {
  let component: MainsystemComponent;
  let fixture: ComponentFixture<MainsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

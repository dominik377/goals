import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgoalsComponent } from './subgoals.component';

describe('SubgoalsComponent', () => {
  let component: SubgoalsComponent;
  let fixture: ComponentFixture<SubgoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalcontainerComponent } from './goalcontainer.component';

describe('GoalcontainerComponent', () => {
  let component: GoalcontainerComponent;
  let fixture: ComponentFixture<GoalcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

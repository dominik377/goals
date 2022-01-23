import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsGuiComponent } from './actions-gui.component';

describe('GuiComponent', () => {
  let component: ActionsGuiComponent;
  let fixture: ComponentFixture<ActionsGuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsGuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsGuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

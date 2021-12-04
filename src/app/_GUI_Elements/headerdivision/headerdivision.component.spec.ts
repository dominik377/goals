import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdivisionComponent } from './headerdivision.component';

describe('HeaderdivisionComponent', () => {
  let component: HeaderdivisionComponent;
  let fixture: ComponentFixture<HeaderdivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderdivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderdivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

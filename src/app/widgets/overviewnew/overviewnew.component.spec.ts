import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewnewComponent } from './overviewnew.component';

describe('OverviewnewComponent', () => {
  let component: OverviewnewComponent;
  let fixture: ComponentFixture<OverviewnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

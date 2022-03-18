import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWithMeasuresComponent } from './item-with-measures.component';

describe('ItemWithMeasuresComponent', () => {
  let component: ItemWithMeasuresComponent;
  let fixture: ComponentFixture<ItemWithMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemWithMeasuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWithMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

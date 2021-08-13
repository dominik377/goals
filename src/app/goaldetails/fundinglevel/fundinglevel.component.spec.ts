import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundinglevelComponent } from './fundinglevel.component';

describe('FundinglevelComponent', () => {
  let component: FundinglevelComponent;
  let fixture: ComponentFixture<FundinglevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundinglevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundinglevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

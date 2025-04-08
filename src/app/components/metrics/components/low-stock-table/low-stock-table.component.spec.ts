import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowStockTableComponent } from './low-stock-table.component';

describe('LowStockComponent', () => {
  let component: LowStockTableComponent;
  let fixture: ComponentFixture<LowStockTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowStockTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowStockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

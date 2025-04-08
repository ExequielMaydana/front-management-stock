import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPeriodChartComponent } from './sales-period-chart.component';

describe('SalesPeriodChartComponent', () => {
  let component: SalesPeriodChartComponent;
  let fixture: ComponentFixture<SalesPeriodChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesPeriodChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPeriodChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

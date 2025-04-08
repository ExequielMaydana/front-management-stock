import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDayliCardComponent } from './sales-dayli-card.component';

describe('SalesDayliComponent', () => {
  let component: SalesDayliCardComponent;
  let fixture: ComponentFixture<SalesDayliCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesDayliCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesDayliCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

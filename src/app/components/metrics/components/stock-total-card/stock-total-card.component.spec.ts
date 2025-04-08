import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTotalCardComponent } from './stock-total-card.component';

describe('StockTotalComponent', () => {
  let component: StockTotalCardComponent;
  let fixture: ComponentFixture<StockTotalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTotalCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTotalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

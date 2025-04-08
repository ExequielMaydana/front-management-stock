import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientsChartComponent } from './new-clients-chart.component';

describe('NewClientsChartComponent', () => {
  let component: NewClientsChartComponent;
  let fixture: ComponentFixture<NewClientsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewClientsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewClientsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

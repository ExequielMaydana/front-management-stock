import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalClientsCardComponent } from './total-clients-card.component';

describe('TotalClientsCardComponent', () => {
  let component: TotalClientsCardComponent;
  let fixture: ComponentFixture<TotalClientsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalClientsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalClientsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

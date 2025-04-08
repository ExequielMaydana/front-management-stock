import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stock-total-card',
  imports: [MatIconModule, MatCardModule],
  templateUrl: './stock-total-card.component.html',
  styleUrl: './stock-total-card.component.css',
})
export class StockTotalCardComponent {
  totalStock = 1287; 
}

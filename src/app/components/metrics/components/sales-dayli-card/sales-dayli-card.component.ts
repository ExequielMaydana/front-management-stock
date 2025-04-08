import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sales-dayli-card',
  imports: [MatIconModule, MatCardModule],
  templateUrl: './sales-dayli-card.component.html',
  styleUrl: './sales-dayli-card.component.css'
})
export class SalesDayliCardComponent {
  salesAmount = 47500; // Monto total ficticio en pesos
  salesCount = 12;     // Cantidad de ventas del día
}

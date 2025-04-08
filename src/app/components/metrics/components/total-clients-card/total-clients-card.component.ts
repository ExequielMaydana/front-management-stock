import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-total-clients-card',
  imports: [MatIconModule, MatCardModule],
  templateUrl: './total-clients-card.component.html',
  styleUrl: './total-clients-card.component.css'
})
export class TotalClientsCardComponent {
  totalClients = 1285; // 🔧 Datos ficticios por ahora

}

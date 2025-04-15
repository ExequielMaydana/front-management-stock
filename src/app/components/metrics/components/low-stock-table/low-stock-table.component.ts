import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-low-stock-table',
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './low-stock-table.component.html',
  styleUrl: './low-stock-table.component.css'
})
export class LowStockTableComponent {
  displayedColumns: string[] = ['name', 'stock', 'supplier', 'unitCost', 'lastRestock', 'minStock'];

  lowStockData = [
    {
      name: 'Café en grano',
      stock: 4,
      supplier: 'Café Supremo',
      unitCost: '$8.50',
      lastRestock: '2025-03-10',
      minStock: 10
    },
    {
      name: 'Azúcar refinada',
      stock: 2,
      supplier: 'Dulzura S.A.',
      unitCost: '$3.20',
      lastRestock: '2025-03-02',
      minStock: 5
    },
    {
      name: 'Leche en polvo',
      stock: 1,
      supplier: 'Lácteos Norte',
      unitCost: '$12.00',
      lastRestock: '2025-02-25',
      minStock: 8
    }
  ];
}

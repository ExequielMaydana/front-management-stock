import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-most-sold-products',
  imports: [CommonModule, MatTableModule, MatCardModule, NgxChartsModule],
  templateUrl: './most-sold-products.component.html',
  styleUrl: './most-sold-products.component.css'
})
export class MostSoldProductsComponent {

  productSales = [
    { name: 'Producto A', value: 120 },
    { name: 'Producto B', value: 95 },
    { name: 'Producto C', value: 80 },
    { name: 'Producto D', value: 60 }
  ];

  colorScheme = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3b82f6', '#06b6d4', '#10b981', '#f59e0b']
  };

}

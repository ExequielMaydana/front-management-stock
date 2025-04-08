import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts'; // ✅ Importar NgxCharts
import { CommonModule } from '@angular/common'; // ✅ Necesario para ngIf, etc.
import { MatCardModule } from '@angular/material/card'; // ✅ Para
import { AfterViewInit } from '@angular/core';

type Color = {
  name: string;
  selectable: boolean;
  group: string;
  domain: string[];
};

@Component({
  selector: 'app-sales-period-chart',
  imports: [CommonModule, MatCardModule, NgxChartsModule], // 👈 Agregar aquí
  templateUrl: './sales-period-chart.component.html',
  styleUrl: './sales-period-chart.component.css',
})
export class SalesPeriodChartComponent implements AfterViewInit {
  // Datos ficticios
  salesData = [
    { name: 'Este mes', value: 90000 },
    { name: 'Mes pasado', value: 83000 },
    { name: 'Trimestre', value: 250000 },
    { name: 'Semestre', value: 460000 },
    { name: 'Año', value: 820000 },
  ];

  colorScheme: Color = {
    name: 'customBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#2563eb']
  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }
}

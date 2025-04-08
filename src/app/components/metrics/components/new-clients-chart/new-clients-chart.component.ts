import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-new-clients-chart',
  imports: [CommonModule, NgxChartsModule, MatCardModule],
  templateUrl: './new-clients-chart.component.html',
  styleUrl: './new-clients-chart.component.css'
})
export class NewClientsChartComponent {
  lineChartData = [
    {
      name: 'Clientes nuevos',
      series: [
        { name: 'Ene', value: 12 },
        { name: 'Feb', value: 19 },
        { name: 'Mar', value: 23 },
        { name: 'Abr', value: 34 },
        { name: 'May', value: 28 },
        { name: 'Jun', value: 45 },
        { name: 'Jul', value: 40 },
        { name: 'Ago', value: 50 },
        { name: 'Sep', value: 36 },
        { name: 'Oct', value: 58 },
        { name: 'Nov', value: 63 },
        { name: 'Dic', value: 70 }
      ]
    }
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }
}

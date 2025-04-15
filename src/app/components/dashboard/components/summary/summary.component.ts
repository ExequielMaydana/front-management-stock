import { Component } from '@angular/core';
import { SalesDayliCardComponent } from '../../../metrics/components/sales-dayli-card/sales-dayli-card.component';
import { SalesPeriodChartComponent } from '../../../metrics/components/sales-period-chart/sales-period-chart.component';
import { LowStockTableComponent } from '../../../metrics/components/low-stock-table/low-stock-table.component';
import { StockTotalCardComponent } from '../../../metrics/components/stock-total-card/stock-total-card.component';
import { TotalClientsCardComponent } from "../../../metrics/components/total-clients-card/total-clients-card.component";
// import { NewClientsChartComponent } from "../../../metrics/components/new-clients-chart/new-clients-chart.component";
import { MostSoldProductsComponent } from "../../../metrics/components/most-sold-products/most-sold-products.component";

@Component({
  selector: 'app-summary',
  imports: [
    StockTotalCardComponent,
    SalesDayliCardComponent,
    SalesPeriodChartComponent,
    LowStockTableComponent,
    TotalClientsCardComponent,
    // NewClientsChartComponent,
    MostSoldProductsComponent
],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {}

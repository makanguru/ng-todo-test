import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsRoutingModule } from "./charts-routing.module";
import ChartsComponent from "./charts.component";

import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
  imports: [ChartsRoutingModule, CommonModule, HighchartsChartModule],
  declarations: [ChartsComponent],
})
export class ChartsModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridsRoutingModule } from "./grids-routing.module";
import { AgGridModule } from "ag-grid-angular";

import GridsComponent from "./grids.component";

@NgModule({
  imports: [GridsRoutingModule, CommonModule, AgGridModule.withComponents([])],
  declarations: [GridsComponent],
})
export class GridsModule {}

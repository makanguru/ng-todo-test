import { Component, OnInit } from "@angular/core";
import { ColDef } from "ag-grid-community";
import { ListTodoService } from "../../list.todo.service";

@Component({
  selector: "grids",
  templateUrl: "./grids.component.html",
  styleUrls: ["./grids.component.less"],
})
export default class GridsComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: "id", sortable: true, filter: true },
    { field: "userId", sortable: true, filter: true },
    {
      field: "title",
      sortable: true,
      filter: true,
      flex: 1,
      minWidth: 500,
    },
    { field: "completed", sortable: true, filter: true },
  ];

  rowData: any;

  constructor(private listTodoService: ListTodoService) {}

  ngOnInit(): void {
    this.rowData = this.listTodoService.getAllTodos();
  }
}

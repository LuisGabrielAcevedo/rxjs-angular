import { Component, OnInit, Input } from "@angular/core";
import {
  ITableHeader,
  ITableItem,
  ITableAction,
  ITablePagintation
} from "./table.interfaces";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input() public headers: ITableHeader[] = [];
  @Input() public data: ITableItem[] = [];
  @Input() public loading: boolean = false;
  @Input() public loadingType: string;
  @Input() public showIndex: boolean = false;
  @Input() public expand: boolean = false;
  @Input() public rowActions: ITableAction[] = [];
  @Input() public pagination: ITablePagintation = null;

  constructor() {}

  ngOnInit() {
    console.log(this.headers, this.data, this.rowActions, this.pagination);
  }
}

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
  @Input() public expandComponent: any = null;
  @Input() public rowActions: ITableAction[] = [];
  @Input() public pagination: ITablePagintation = null;
  public openRows: number[] = [];

  constructor() {}

  ngOnInit() {}

  openRow(i: number) {
    this.openRows.push(i);
  }

  closeRow(i: number) {
    this.openRows.splice(this.openRows.indexOf(i), 1);
  }
}

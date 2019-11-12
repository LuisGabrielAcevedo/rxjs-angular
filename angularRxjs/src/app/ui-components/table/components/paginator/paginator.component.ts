import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { ITablePagintation } from "../../table.interfaces";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.css"]
})
export class PaginatorComponent implements OnChanges {
  @Input() public pagination: ITablePagintation;
  public paginatorData: ITablePagintation;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const pagination: ITablePagintation = changes.pagination
      ? changes.pagination.currentValue
      : undefined;
    if (pagination) this.updatePaginatorData(pagination);
  }

  updatePaginatorData(pagination: ITablePagintation) {
    const pages = Math.ceil(pagination.total / pagination.perPage);
    this.paginatorData = {
      page: pagination.page,
      perPage: pagination.perPage,
      total: pagination.total,
      pages: pages,
      limit1: pagination.page > 5 ? pagination.page - 2 : 1,
      limit2:
        pagination.page > 5
          ? pagination.page === pages
            ? pages
            : pagination.page + 2
          : pages < 5
          ? pages
          : 5,
      tmpPages: []
    };

    for (
      var i = this.paginatorData.limit1;
      i <= this.paginatorData.limit2;
      i++
    ) {
      this.paginatorData.tmpPages.push(i);
    }
  }

  changePage(p: number) {
    this.updatePaginatorData({ ...this.pagination, page: p });
  }

  fisrtPage() {
    if (this.paginatorData.page !== 1)
      this.updatePaginatorData({
        ...this.pagination,
        page: 1
      });
  }

  lastPage() {
    if (this.paginatorData.page !== this.paginatorData.pages)
      this.updatePaginatorData({
        ...this.pagination,
        page: this.paginatorData.pages
      });
  }

  nextPage() {
    if (this.paginatorData.page + 1 <= this.paginatorData.pages)
      this.updatePaginatorData({
        ...this.pagination,
        page: this.paginatorData.page + 1
      });
  }

  prevPage() {
    if (this.paginatorData.page - 1 >= 1)
      this.updatePaginatorData({
        ...this.pagination,
        page: this.paginatorData.page - 1
      });
  }
}

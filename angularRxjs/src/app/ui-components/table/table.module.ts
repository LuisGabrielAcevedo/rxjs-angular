import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { ButtonModule } from "./components/button/button.module";

@NgModule({
  declarations: [TableComponent, PaginatorComponent],
  imports: [CommonModule, ButtonModule],
  exports: [TableComponent]
})
export class TableModule {}

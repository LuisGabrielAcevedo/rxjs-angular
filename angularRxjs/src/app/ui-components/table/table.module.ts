import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { ButtonModule } from "./components/button/button.module";
import { DynamicComponentDirective } from "./components/select-component/select-component.directive";
import { TextComponent } from "./components/text/text.component";
import { TextModule } from "./components/text/text.module";
import { DynamicTableSelectComponent } from "./components/select-component/dynamic-component-instance.component";

@NgModule({
  declarations: [
    TableComponent,
    PaginatorComponent,
    DynamicComponentDirective,
    DynamicTableSelectComponent
  ],
  imports: [CommonModule, ButtonModule, TextModule],
  exports: [TableComponent],
  entryComponents: [TextComponent]
})
export class TableModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { TableModule } from "./ui-components/table/table.module";
import { ProposalDescriptionModule } from "./proposal-description/proposal-description.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ProposalDescriptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

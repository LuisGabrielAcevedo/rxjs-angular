import { Component, Input } from "@angular/core";
import { ITableItem } from "../ui-components/table/table.interfaces";

@Component({
  selector: "app-proposal-description",
  templateUrl: "./proposal-description.component.html",
  styleUrls: ["./proposal-description.component.css"]
})
export class ProposalDescriptionComponent {
  @Input() item: ITableItem;
  constructor() {}
}

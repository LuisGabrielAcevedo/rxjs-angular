import { Component } from "@angular/core";
import {
  ITableHeader,
  ETableComponents,
  ITableItem,
  ITableAction,
  ITablePagintation
} from "./ui-components/table/table.interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angularRxjs";

  public headers: ITableHeader[] = [
    {
      label: "Fecha",
      key: "date",
      component: ETableComponents.text
    },
    {
      label: "N° de propuesta",
      key: "proposalNumber",
      component: ETableComponents.text
    },
    {
      label: "DNI",
      key: "docNumber",
      component: ETableComponents.text
    },
    {
      label: "Status",
      key: "status",
      component: ETableComponents.text
    }
  ];

  public data: ITableItem[] = [
    {
      date: 400,
      proposalNumber: 65465,
      docNumber: 29747505,
      fullName: "Diego Dalairac",
      vehicle: "500 1.4 CABRIO",
      value: "$ 721.395",
      status: "Pendiente"
    },
    {
      date: 400,
      proposalNumber: 29747505,
      docNumber: 29747505,
      fullName: "Aprobada",
      vehicle: "500 1.4 CABRIO",
      value: "$ 721.395",
      status: "Pendiente"
    },
    {
      date: 400,
      proposalNumber: 29747505,
      docNumber: 29747505,
      fullName: "Aprobada",
      vehicle: "500 1.4 CABRIO",
      value: "$ 721.395",
      status: "Pendiente"
    }
  ];

  public rowActions: ITableAction[] = [
    {
      label: "Ver Detalle",
      icon: "",
      clickEvent: item => console.log(item)
    }
  ];

  public pagination: ITablePagintation = {
    page: 1,
    perPage: 10,
    total: 100
  };
}

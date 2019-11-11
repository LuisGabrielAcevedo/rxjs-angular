export interface ITableHeader {
  label: string;
  key: string;
  component: ETableComponents;
  sortable?: string;
}

export interface ITableItem {
  [key: string]: any;
}

export enum ETableComponents {
  text = "TextComponent"
}

export interface ITableAction {
  icon?: string;
  label?: string;
  clickEvent?: (arg: ITableItem) => void;
}

export interface ITablePagintation {
  page: number;
  perPage: number;
  total: number;
}

export interface ITableChanges {
  pagination?: ITablePagintation;
  sort: string;
}

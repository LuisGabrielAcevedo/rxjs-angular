export interface ITableHeader {
  label: string;
  key: string;
  component: ETableComponents;
  sortable?: string;
  visibleOnMobile?: boolean;
}

export interface ITableItem {
  [key: string]: any;
}

export enum ETableComponents {
  text = "TextComponent",
  date = "DateComponent"
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
  pages?: number;
  limit1?: number;
  limit2?: number;
  tmpPages?: number[];
}

export interface ITableChanges {
  pagination?: ITablePagintation;
  sort: string;
}

export type Sex = "male" | "female";

// user Type
export interface User {
  id: string;
  name: string;
  birthday: string;
  time: string;
  sex: Sex;
}

// 각 data table type
export interface DataTableContent {
  sub?: string;
  ch: string;
  des?: string;
  theme?: string;
}

// 전체 data table type
export interface DataTable {
  id: number;
  type?: null | "tile";
  contents?: (DataTableContent | undefined)[];
}

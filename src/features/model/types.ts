export type Sex = "male" | "female";

export interface User {
  id: string;
  name: string;
  birthday: string;
  time: string;
  sex: Sex;
}

export interface DataTableContent {
  sub?: string;
  ch: string;
  des: string;
}

export interface DataTable {
  id: number;
  type?: null | "tile";
  contents: DataTableContent[];
}

import { DataTable } from "./types";

// 테이블 열 헤더
export const COLUMN_HEADERS = ["時", "日", "月", "年"] as const;

// 테이블 col 헤더
export const ROW_HEADERS = [
  { id: 1, label: "十星", des: "십성" },
  { id: 2, label: "天干", des: "천간" },
  { id: 3, label: "地支", des: "지지" },
  { id: 4, label: "十星", des: "십성" },
  { id: 5, label: "十二運星", des: "십이운성" },
  { id: 6, label: "十二神殺", des: "십이신살" },
  { id: 7, label: "貴人", des: "귀인" },
] as const;

// 내부 사주 데이터
export const TABLE_TILES: DataTable[] = [
  {
    id: 1,
    contents: [
      { ch: "傷官", des: "상관" },
      { ch: "比肩", des: "비견" },
      { ch: "傷官", des: "상관" },
      { ch: "傷官", des: "상관" },
    ],
  },
  {
    id: 2,
    contents: [
      { ch: "壬", des: "임", sub: "陽水", theme: "black" },
      { ch: "丁", des: "정", sub: "陰火", theme: "black" },
      { ch: "癸", des: "계", sub: "陰水", theme: "red" },
      { ch: "癸", des: "계", sub: "陰水", theme: "black" },
    ],
  },
  {
    id: 3,
    contents: [
      { ch: "寅", des: "인", sub: "陽木", theme: "green" },
      { ch: "巳", des: "사", sub: "陰火", theme: "red" },
      { ch: "亥", des: "해", sub: "陰水", theme: "black" },
      { ch: "酉", des: "유", sub: "陰金", theme: "white" },
    ],
  },
  {
    id: 4,
    contents: [
      { ch: "比肩", des: "비견" },
      { ch: "劫財", des: "겁재" },
      { ch: "食神", des: "식신" },
      { ch: "偏財", des: "편재" },
    ],
  },
  {
    id: 5,
    contents: [
      { ch: "死", des: "사" },
      { ch: "帝旺", des: "제왕" },
      { ch: "胎", des: "태" },
      { ch: "長生", des: "장생" },
    ],
  },
  {
    id: 6,
    contents: [
      { ch: "劫殺", des: "겁살" },
      { ch: "地殺", des: "지상" },
      { ch: "驛馬殺", des: "역마살" },
      { ch: "將星殺", des: "장성살" },
    ],
  },
  {
    id: 7,
    contents: [
      undefined,
      undefined,
      { ch: "天乙", des: "천을귀인" },
      { ch: "天乙", des: "천을귀인" },
    ],
  },
];

export type ColumnHeader = (typeof COLUMN_HEADERS)[number];
export type RowHeader = (typeof ROW_HEADERS)[number];

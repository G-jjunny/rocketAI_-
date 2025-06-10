import dayjs from "dayjs";

export function dayFormat(dateStr: string): string {
  return dayjs(dateStr).format("YYYY년 MM월 DD일");
}

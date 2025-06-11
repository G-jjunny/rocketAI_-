import React from "react";
import { DataTableContent } from "../model/types";
import { getThemeBgClass } from "../model/utils";

export const ColorTile = ({ ch, des, sub, theme }: DataTableContent) => {
  /** 배경 색이 있는 데이터 tile */
  if (sub)
    return (
      <div
        className={`flex flex-col items-center justify-between p-1 aspect-square rounded-xl ${getThemeBgClass(
          theme
        )}`}
      >
        <p className="text-[8px]">{des}</p>
        <h1 className=" text-2xl font-semibold leading-6">{ch}</h1>
        {sub && <p className=" text-xs">{sub}</p>}
      </div>
    );

  /** 배경색이 없는 기본 데이터 tile */
  if (!sub) {
    return (
      <div className=" flex flex-col items-center">
        <h2 className=" text-sm font-semibold">{ch}</h2>
        <p className=" text-xs">({des})</p>
      </div>
    );
  }
};

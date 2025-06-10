import React from "react";
import { DataTableContent } from "../model/types";

export const ColorTile = ({ ch, des, sub }: DataTableContent) => {
  return (
    <div className=" flex flex-col items-center justify-between p-1 aspect-square rounded-md bg-pri-navy">
      {sub && <p className=" text-xs">임</p>}
      <h1 className=" text-2xl font-semibold">{ch}</h1>
      <p className="text-xs">{des}</p>
    </div>
  );
};

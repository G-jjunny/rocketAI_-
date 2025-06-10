import { SajuTable } from "@/features/ui/SajuTable";
import React from "react";
import Image from "next/image";
import SajuBg from "@/shared/Saju_bg.png";

export const Saju = () => {
  return (
    <div className="w-full relative p-3 h-fit flex flex-col items-center">
      <Image
        src={SajuBg}
        alt="SajuBg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className=" relative w-full h-full border-2">
        <div className="absolute top-[0%] left-[6px] border h-full" />
        <div className="absolute top-[0%] right-[6px] border h-full" />
        <div className="absolute top-[6px] right-[0%] border w-full" />
        <div className="absolute bottom-[6px] right-[0%] border w-full" />
        <SajuTable />
      </div>
    </div>
  );
};

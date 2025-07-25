import Image from "next/image";
import React, { ReactNode } from "react";
import Layer1 from "@/shared/layer_left.png";
import Layer2 from "@/shared/leyer_right.png";

interface SajuLayout {
  children: ReactNode;
}

export const SajuLayout = ({ children }: SajuLayout) => {
  return (
    <div className="w-full relative p-3 h-full flex flex-col items-center">
      <div className=" relative w-full h-full border-[3px] px-5 py-10 flex flex-col gap-6 bg-table">
        <div className="absolute top-[0%] left-[6px] border-[1px] h-full border-pri-navy" />
        <Image
          src={Layer1}
          alt="layer_left"
          className="absolute left-[6px] w-[20%]"
        />
        <Image
          src={Layer2}
          alt="layer_right"
          className=" absolute right-[6px] w-[20%] top-0"
        />

        <div className="absolute top-[0%] right-[6px] border-[1px] h-full border-pri-navy" />
        <div className="absolute top-[6px] right-[0%] border-[1px] w-full border-pri-navy" />
        <div className="absolute bottom-[6px] right-[0%] border-[1px] w-full border-pri-navy" />
        {children}
      </div>
    </div>
  );
};

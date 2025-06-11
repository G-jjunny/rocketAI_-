import React from "react";
import { dayFormat } from "@/shared/libs/day";
import { User } from "../model/types";

interface SajuHeaderProps {
  UserData: User;
}

/** header는 단순 props로 처리 */
export const SajuHeader = ({ UserData }: SajuHeaderProps) => {
  return (
    <div className=" text-center flex flex-col gap-3">
      <h2 className=" text-md">{UserData?.name}님의 사주</h2>
      <h1 className=" text-xl font-semibold">
        {dayFormat(UserData?.birthday)} {UserData?.time}
      </h1>
    </div>
  );
};

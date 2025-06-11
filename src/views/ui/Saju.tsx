import { SajuTable } from "@/features/ui/SajuTable";
import React from "react";
import { SajuHeader } from "@/features/ui/SajuHeader";
import { User } from "@/features/model/types";
import { SajuLayout } from "@/shared/ui/SajuLayout";

interface SajuProps {
  UserData: User;
}

export const Saju = ({ UserData }: SajuProps) => {
  return (
    <SajuLayout>
      <SajuHeader UserData={UserData} />
      <SajuTable UserData={UserData} />
    </SajuLayout>
  );
};

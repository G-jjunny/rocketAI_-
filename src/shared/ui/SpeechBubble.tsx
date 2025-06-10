import React, { PropsWithChildren } from "react";
import { cn } from "../libs/utils";

interface SpeechBubbleProps extends PropsWithChildren {
  className?: string;
}

export const SpeechBubble = ({ className, children }: SpeechBubbleProps) => {
  return (
    <div className={cn(" absolute flex flex-col items-center", className)}>
      {children}
    </div>
  );
};

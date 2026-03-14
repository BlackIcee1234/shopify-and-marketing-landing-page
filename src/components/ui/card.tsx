import type React from "react";
import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: DivProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(13,38,82,0.8),rgba(8,26,57,0.7))] p-5 shadow-[0_10px_35px_rgba(3,10,26,0.45)] backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}

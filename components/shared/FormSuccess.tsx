import { cn } from "@/lib/utils";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function FormSuccess({
     message,
     className,
}: {
     message?: string;
     className?: string;
}) {
     if (!message) return null;
     return (
          <div
               className={cn(
                    "flex w-full items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500",
                    className,
               )}
          >
               <FaCheckCircle className="h-4 w-4" />
               <p>{message}</p>
          </div>
     );
}

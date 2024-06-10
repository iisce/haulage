import { cn } from "@/lib/utils";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function FormError({
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
                    "flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive",
                    className,
               )}
          >
               <FaExclamationTriangle className="h-4 w-4" />
               <p className="m-0 p-0">{message}</p>
          </div>
     );
}

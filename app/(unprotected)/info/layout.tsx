import { ScrollArea } from "@/components/ui/scroll-area";
import React, { ReactNode } from "react";

export default function InfoLayout({ children }: { children: ReactNode }) {
     return (
          <div className="p-2">
               <ScrollArea className="mx-auto flex h-[calc(100svh-16px)] w-full max-w-md flex-col rounded-xl border bg-red-300 shadow">
                    {children}
               </ScrollArea>
          </div>
     );
}

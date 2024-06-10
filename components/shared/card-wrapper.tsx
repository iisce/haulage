import React from "react";
import {
     Card,
     CardContent,
     CardFooter,
     CardHeader,
} from "@/components/ui/card";
import Header from "@/components/shared/header";
import BackButton from "@/components/shared/back-button";
import { cn } from "@/lib/utils";

export default function CardWrapper({
     children,
     headerLabel,
     backButtonLabel,
     backButtonHref,
     className,
}: {
     children: React.ReactNode;
     headerLabel: string;
     className?: string;
     backButtonLabel?: string;
     backButtonHref?: string;
}) {
     return (
          <Card
               className={cn(
                    "mx-auto w-full max-w-[350px] border-0 shadow-none",
                    className,
               )}
          >
               <CardHeader className="px-0 py-2">
                    <Header label={headerLabel} />
               </CardHeader>
               <CardContent>{children}</CardContent>
               {backButtonHref && (
                    <CardFooter className="p-0">
                         <BackButton
                              label={backButtonLabel}
                              href={backButtonHref}
                         />
                    </CardFooter>
               )}
          </Card>
     );
}

"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function ProtectedNavLink({
     href,
     className,
     title,
     icon,
     badge,
     onClick,
}: {
     href: string;
     className?: string;
     title: string;
     icon?: React.ReactNode;
     badge?: string;
     onClick?: () => void;
}) {
     const pathName = usePathname();
     const active = pathName.startsWith(href);

     const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
          if (onClick) {
               e.preventDefault();
               onClick();
          }
     };

     return (
          <Button
               asChild
               variant="link"
               className={cn(
                    `${
                         active ? "bg-muted" : "text-muted-foreground"
                    } flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`,
                    className,
               )}
          >
               <Link href={href} onClick={handleClick}>
                    {icon}
                    {title}
                    {badge && (
                         <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                              {badge}
                         </Badge>
                    )}
               </Link>
          </Button>
     );
}

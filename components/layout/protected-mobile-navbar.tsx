"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
     DASHBOARD_NAV_ITEMS,
     DASHBOARD_NAV_ITEMS_ADMIN,
     DASHBOARD_NAV_ITEMS_AGENT,
} from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import DashboardBreadcrumb from "./dashboard-breadcrumb";
import ProtectedNavLink from "./nav-link-protected";
import UserMenu from "./user-menu";
import { Role, User } from "@prisma/client";

export default function ProtectedMobileNavBar({ user }: { user: User }) {
     const [isOpen, setIsOpen] = useState(false);
     const router = useRouter();

     const handleNavigation = (href: string) => {
          router.push(href);
          setIsOpen(false);
     };

     const navItems =
          user?.role === Role.SUPER_ADMIN
               ? DASHBOARD_NAV_ITEMS
               : user?.role === Role.ADMIN
                 ? DASHBOARD_NAV_ITEMS_ADMIN
                 : DASHBOARD_NAV_ITEMS_AGENT;

     return (
          <header className="flex h-16 shrink-0 items-center gap-4 overflow-clip border-b px-4 lg:h-[60px] lg:px-6">
               <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                         <Button
                              variant="outline"
                              size="icon"
                              className="shrink-0 md:hidden"
                         >
                              <Menu className="h-5 w-5" />
                              <span className="sr-only">
                                   Toggle navigation menu
                              </span>
                         </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col">
                         <nav className="grid gap-2 text-lg font-medium">
                              <Link
                                   href={"/"}
                                   className="flex shrink-0 items-center gap-2 px-5 font-bold"
                                   onClick={() => setIsOpen(false)}
                              >
                                   <Image
                                        src="https://transpay.vercel.app/anambara.png"
                                        height={40}
                                        width={40}
                                        className="h-10 w-10 shrink-0"
                                        alt="HauleFee Logo"
                                        priority
                                   />
                                   <span className="sr-only">HauleFee</span>
                              </Link>
                              {navItems.map(({ href, title, icon }, key) => (
                                   <ProtectedNavLink
                                        key={key}
                                        href={href}
                                        title={title}
                                        icon={icon}
                                        className="transition-colors"
                                        onClick={() => handleNavigation(href)}
                                   />
                              ))}
                         </nav>
                         <div className="mt-auto"></div>
                    </SheetContent>
               </Sheet>
               <div className="w-full flex-1">
                    <DashboardBreadcrumb />
               </div>
               <UserMenu user={user} />
          </header>
     );
}

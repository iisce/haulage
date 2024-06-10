import { DASHBOARD_NAV_ITEMS } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import DashboardBreadcrumb from "./dashboard-breadcrumb";
import ProtectedNavLink from "./nav-link-protected";
import UserMenu from "./user-menu";

export default function ProtectedMobileNavBar() {
     return (
          <header className="flex h-16 shrink-0 items-center gap-4 overflow-clip border-b px-4 lg:h-[60px] lg:px-6">
               <Sheet>
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
                              >
                                   <Image
                                        src={
                                             "https://transpay.vercel.app/anambara.png"
                                        }
                                        height={40}
                                        width={40}
                                        className="h-10 w-10 shrink-0"
                                        alt="Transpay Logo"
                                   />
                                   <span className="sr-only">Haulage</span>
                              </Link>
                              {DASHBOARD_NAV_ITEMS.map(
                                   ({ href, title, icon }, key) => (
                                        <SheetClose key={key}>
                                             <ProtectedNavLink
                                                  href={href}
                                                  title={title}
                                                  icon={icon}
                                                  className="transition-colors"
                                             />
                                        </SheetClose>
                                   ),
                              )}
                         </nav>
                         <div className="mt-auto"></div>
                    </SheetContent>
               </Sheet>
               <div className="w-full flex-1">
                    <DashboardBreadcrumb />
               </div>
               <UserMenu />
          </header>
     );
}

import { DASHBOARD_NAV_ITEMS } from "@/constants";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ProtectedNavLink from "./nav-link-protected";

export default function ProtectedSideBar() {
     return (
          <div className="hidden border-r bg-muted md:block">
               <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-16 items-center overflow-clip border-b px-4 lg:h-[60px] lg:px-6">
                         <Link
                              href={"/"}
                              className="flex shrink-0 items-center gap-2 px-5 font-bold"
                         >
                              <Image
                                   src="https://transpay.vercel.app/anambara.png?w=48&q=75"
                                   height={40}
                                   width={40}
                                   className="h-10 w-10 shrink-0"
                                   alt="HauleFee Logo"
                                   priority
                              />
                              <span className="">HauleFee</span>
                         </Link>
                         <Button
                              variant="outline"
                              size="icon"
                              className="ml-auto h-8 w-8"
                         >
                              <Bell className="h-4 w-4" />
                              <span className="sr-only">
                                   Toggle notifications
                              </span>
                         </Button>
                    </div>
                    <div className="flex-1">
                         <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                              {DASHBOARD_NAV_ITEMS.map(
                                   ({ href, title, icon }, key) => (
                                        <ProtectedNavLink
                                             key={key}
                                             href={href}
                                             title={title}
                                             icon={icon}
                                             className="transition-colors"
                                        />
                                   ),
                              )}
                         </nav>
                    </div>
               </div>
          </div>
     );
}

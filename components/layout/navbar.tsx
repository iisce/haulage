import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DASHBOARD_NAV_ITEMS } from "@/constants";
import { getCurrentUser } from "@/data/users";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";
import UserMenu from "./user-menu";

export default async function NavBar() {
     const user = await getCurrentUser();
     return (
          <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between gap-4 border-b bg-transparent px-4 backdrop-blur md:px-6">
               <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                         href={"#"}
                         className="flex shrink-0 items-center px-5 font-bold"
                    >
                         <Image
                              src={"https://transpay.vercel.app/anambara.png"}
                              height={40}
                              width={40}
                              priority
                              className="h-10 w-10 shrink-0"
                              alt="HauleFee Logo"
                         />
                         <span className="sr-only">HauleFee</span>
                    </Link>
                    <NavLink
                         href={"/"}
                         title={"Home"}
                         className="transition-colors"
                    />
               </nav>
               <Sheet>
                    <SheetTrigger asChild>
                         <Button
                              variant="outline"
                              size="icon"
                              className="h-10 w-10 shrink-0 md:hidden"
                         >
                              <Menu className="h-5 w-5" />
                              <span className="sr-only">
                                   Toggle navigation menu
                              </span>
                         </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                         <nav className="grid gap-6 text-lg font-medium">
                              <Link
                                   href={"#"}
                                   className="flex shrink-0 items-center px-5 font-bold"
                              >
                                   <Image
                                        src="https://transpay.vercel.app/anambara.png"
                                        height={40}
                                        width={40}
                                        priority
                                        className="shrink-0"
                                        alt="HauleFee Logo"
                                   />
                                   <span className="sr-only">HauleFee</span>
                              </Link>
                              {DASHBOARD_NAV_ITEMS.map(
                                   ({ href, title }, key) => (
                                        <NavLink
                                             key={key}
                                             href={href}
                                             title={title}
                                        />
                                   ),
                              )}
                         </nav>
                    </SheetContent>
               </Sheet>
               <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    {user ? (
                         <>
                              <Link
                                   className={cn(buttonVariants())}
                                   href="/dashboard"
                              >
                                   Dashboard
                              </Link>
                              <UserMenu user={user} />
                         </>
                    ) : (
                         <Link className={cn(buttonVariants())} href="/sign-in">
                              Sign In
                         </Link>
                    )}
               </div>
          </header>
     );
}

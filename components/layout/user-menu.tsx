'use client';

import { logout } from '@/actions/logout';
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { Role, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import {
     DASHBOARD_NAV_ITEMS,
     DASHBOARD_NAV_ITEMS_ADMIN,
     DASHBOARD_NAV_ITEMS_AGENT,
     DASHBOARD_NAV_ITEMS_NONE,
} from "@/constants";
import Link from "next/link";

export default function UserMenu({ user }: { user: Partial<User> }) {
     const router = useRouter();

     return (
          <DropdownMenu>
               <DropdownMenuTrigger asChild>
                    <Button
                         variant="secondary"
                         size="icon"
                         className="rounded-full"
                    >
                         <CircleUser className="h-5 w-5" />
                         <span className="sr-only">Toggle user menu</span>
                    </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                    <DropdownMenuGroup>
                         <DropdownMenuLabel className="pb-0">
                              {user?.firstName} {user?.lastName}
                         </DropdownMenuLabel>
                         <div className="px-2">{user?.email}</div>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    {(user?.role === Role.SUPER_ADMIN
                         ? DASHBOARD_NAV_ITEMS
                         : user?.role === Role.ADMIN
                           ? DASHBOARD_NAV_ITEMS_ADMIN
                           : user?.role === Role.AGENT
                             ? DASHBOARD_NAV_ITEMS_AGENT
                             : DASHBOARD_NAV_ITEMS_NONE
                    ).map((item, k) => (
                         <DropdownMenuItem key={k} className="grid">
                              <Link
                                   className="flex flex-row items-center justify-between"
                                   href={item.href}
                              >
                                   {item.title}
                                   {item.icon}
                              </Link>
                         </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                         onClick={async () =>
                              await logout().then(() =>
                                   router.replace("/sign-in"),
                              )
                         }
                    >
                         Logout
                    </DropdownMenuItem>
               </DropdownMenuContent>
          </DropdownMenu>
     );
}

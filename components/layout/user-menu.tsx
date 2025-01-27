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
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

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
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
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

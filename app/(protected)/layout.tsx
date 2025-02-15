import { auth } from "@/auth";
import ProtectedMobileNavBar from "@/components/layout/protected-mobile-navbar";
import ProtectedSideBar from "@/components/layout/protected-side-bar";
import { getCurrentUser } from "@/data/users";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProtectedLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     const session = await auth();
     const currentUser = await getCurrentUser();
     if (!session || !session.user.id || session.expired || !currentUser) {
          redirect("/sign-in");
     }
     return (
          <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
               <ProtectedSideBar />
               <div className="flex h-screen flex-col overflow-y-scroll">
                    <ProtectedMobileNavBar user={currentUser} />
                    {children}
               </div>
          </div>
     );
}

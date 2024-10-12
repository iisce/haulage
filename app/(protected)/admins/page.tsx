import { AdminTable } from "@/components/admin-page/admin-table";
import Search from "@/components/shared/search-component";
import { Button } from "@/components/ui/button";
import { SAMPLE_ADMIN_DATA } from "@/constants";
import { getAdmins } from "@/data/admin";
import { getAllUsersByRole } from "@/data/users";
import Link from "next/link";
import React from "react";

const adminsLocal: IAdmin[] = SAMPLE_ADMIN_DATA;

export default async function AdminPage() {
     const admins = await getAdmins();
     return (
          <div className="px-[20px]">
               <div className="flex w-full gap-12 pt-[20px]">
                    <Search />
                    <Link href="admins/generate-confirmation-code">
                         <Button value={`Add Admin`}>Add Admin</Button>
                    </Link>
               </div>
               <AdminTable admins={admins} />
               {/* <AdminTable admins={adminsLocal} /> */}
          </div>
     );
}

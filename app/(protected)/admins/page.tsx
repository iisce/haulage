import { AdminTable } from "@/components/admin-page/admin-table";
import Search from "@/components/shared/search-component";
import { Button } from "@/components/ui/button";
import { getAdmins } from "@/data/admin";
import { getAllUsersByRole } from "@/data/users";
import Link from "next/link";
import React from "react";

const adminsLocal: IAdmin[] = [
     {
          _id: "001",
          blacklist: false,
          createdAt: "",
          email: "sample@admin1.com",
          fullname: "Oyeniran Ayobami",
          lga: "Agege",
          nin: "11111111111",
          password: "",
          phonenumber: "08061719533",
          role: "admin",
          token: "",
          updatedAt: "",
     },
];

export default async function AdminPage() {
     // const admins = await getAdmins();
     return (
          <div className="px-[20px]">
               <div className="flex w-full gap-12 pt-[20px]">
                    <Search />
                    <Link href="admins/generate-confirmation-code">
                         <Button value={`Add Admin`}>Add Admin</Button>
                    </Link>
               </div>
               {/* <AdminTable admins={admins} /> */}
               <AdminTable admins={adminsLocal} />
          </div>
     );
}

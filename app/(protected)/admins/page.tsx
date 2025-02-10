import RoleGate from "@/components/RoleGate";
import { AdminTable } from "@/components/admin-page/admin-table";
import Search from "@/components/shared/search-component";
import { Button } from "@/components/ui/button";
import { getAdmins } from "@/data/admin";
import Link from "next/link";

export default async function AdminPage() {
     const adminsData = await getAdmins();
     return (
          <RoleGate options={{ allowedRole: "SUPERADMIN" }}>
               <div className="px-[20px]">
                    <div className="flex w-full gap-12 pt-[20px]">
                         <Search />
                         <Link href="admins/generate-confirmation-code">
                              <Button value={`Add Admin`}>Add Admin</Button>
                         </Link>
                    </div>
                    <AdminTable admins={adminsData.admins} />
               </div>
          </RoleGate>
     );
}

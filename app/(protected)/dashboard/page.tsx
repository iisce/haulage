import AdminDashboard from "@/components/dashboard/admin-dashboard";
import AgentDashboard from "@/components/dashboard/agent-dashboard";
import SuperAdminDashboard from "@/components/dashboard/super-admin-dashboard";
import { Separator } from "@/components/ui/separator";
import { getCurrentUser } from "@/data/users";
import { Role } from "@prisma/client";

export default async function DashboardPage() {
     const currentUser = await getCurrentUser();
     const role = currentUser?.role;
     return (
          <div className="h-full">
               <div className="p-5 text-xl">
                    Welcome {currentUser?.firstName} {currentUser?.lastName}
               </div>
               <Separator className="" />
               {role === Role.SUPER_ADMIN && <SuperAdminDashboard />}
               {role === Role.ADMIN && <AdminDashboard />}
               {role === Role.AGENT && <AgentDashboard />}
          </div>
     );
}

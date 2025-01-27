import AdminDashboard from "@/components/dashboard/admin-dashboard";
import AgentDashboard from "@/components/dashboard/agent-dashboard";
import SuperAdminDashboard from "@/components/dashboard/super-admin-dashboard";
import { getCurrentUser } from "@/data/users";
import { Role } from "@prisma/client";

export default async function DashboardPage() {
     const currentUser = await getCurrentUser();
     const role = currentUser?.role;
     return (
          <div className="h-full">
               {role === Role.SUPER_ADMIN && <SuperAdminDashboard />}
               {role === Role.ADMIN && <AdminDashboard />}
               {role === Role.AGENT && <AgentDashboard />}
          </div>
     );
}

import AdminDashboard from "@/components/dashboard/admin-dashboard";
import AgentDashboard from "@/components/dashboard/agent-dashboard";
import SuperAdminDashboard from "@/components/dashboard/super-admin-dashboard";
import { getCurrentUser } from "@/data/users";
import React from "react";

export default async function DashboardPage() {
     const currentUser = await getCurrentUser();
     const role = currentUser?.role;
     return (
          <div className="h-full">
               {role?.toLowerCase() === "superadmin" && <SuperAdminDashboard />}
               {role?.toLowerCase() === "admin" && <AdminDashboard />}
               {role?.toLowerCase() === "agent" && <AgentDashboard />}
          </div>
     );
}

import AdminDashboard from "@/components/dashboard/admin-dashboard";
import AgentDashboard from "@/components/dashboard/agent-dashboard";
import SuperAdminDashboard from "@/components/dashboard/super-admin-dashboard";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="h-full ">
      {/* <AdminDashboard /> */}
      {/* <SuperAdminDashboard /> */}
      <AgentDashboard />
    </div>
  );
}

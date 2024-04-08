import AdminDashboard from "@/components/dashboard/admin-dashboard";
import SuperAdminDashboard from "@/components/dashboard/super-admin-dashboard";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="h-full ">
      <AdminDashboard />
      {/* <SuperAdminDashboard /> */}
    </div>
  );
}

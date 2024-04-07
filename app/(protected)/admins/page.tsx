import { AdminTable } from "@/components/admin-page/admin-table";
import Search from "@/components/shared/search-component";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AdminPage() {
  return (
    <div className="px-[20px]">
      <div className="flex gap-12 pt-[20px] w-full">
        <Search />
        <Link href="admins/new-admin">
          <Button value={`Add Admin`}>Add Admin</Button>
        </Link>
      </div>
      <AdminTable />
    </div>
  );
}

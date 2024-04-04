import Search from "@/components/shared/search-component";
import { Button } from "@/components/ui/button";
import React from "react";

export default function AdminPage() {
  return (
    <>
      <div className="flex gap-12 px-[20px] pt-[20px] w-full">
        <Search />
        <Button value={`Add Admin`}>Add Admin</Button>
      </div>
    </>
  );
}

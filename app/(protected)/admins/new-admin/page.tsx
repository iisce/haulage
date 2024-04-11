import CreateAdminForm from "@/components/forms/new-admin-form";
import React from "react";

export default function NewAdmin({ params }: {params:{id: string}}) {
  return (
    <div className="flex flex-col  pt-[20px] w-full">
      <div className="pl-5 py-3 text-lg">ADMIN INFORMATION</div>
      <div className=" my-4 mx-4">
        <CreateAdminForm id={params.id} />
      </div>
    </div>
  );
}

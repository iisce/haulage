import UpdateAdminForm from "@/components/forms/update-admin-form";
import { USER_ADMIN } from "@/constants";
import { getAdminById } from "@/data/admin";
import { notFound } from "next/navigation";
import React from "react";

export default async function SingleVehiclePage({
     params,
}: {
     params: { id: string };
}) {
     // const admin = await getAdminById({ id: params.id });
     const admin = USER_ADMIN;
     if (!admin) return notFound();
     return <UpdateAdminForm admin={admin} />;
}

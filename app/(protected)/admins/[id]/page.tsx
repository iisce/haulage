"use client";
import { ADMINLIST } from "@/components/admin-page/admin-table";
import UpdateAdminForm from "@/components/forms/update-admin-form";
import React from "react";

export default function SingleVehiclePage({
  params,
}: {
  params: { id: string };
}) {
  const admin = ADMINLIST.find(({ id }) => id === params.id);
  return <div>{<UpdateAdminForm admin={admin} />}</div>;
}

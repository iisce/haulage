import UpdateVehicleForm from "@/components/forms/updateVehicleForm";
import { VEHICLE_DETAILS } from "@/constants";
import { getVehicleById } from "@/data/vehicles";
import { notFound } from "next/navigation";
import React from "react";

export default async function EditSingleVehiclePage({
     params,
}: {
     params: { id: string };
}) {
     const vehicle = await getVehicleById({ id: params.id });

     if (!vehicle) return notFound();

     return <UpdateVehicleForm vehicle={vehicle} />;
}

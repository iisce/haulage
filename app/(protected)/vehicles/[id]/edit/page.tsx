import { getAllTyreSettings } from "@/actions/settings/tyre";
import UpdateVehicleForm from "@/components/forms/updateVehicleForm";
import { getVehicleById } from "@/data/vehicles";
import { notFound } from "next/navigation";

export default async function EditSingleVehiclePage({
     params,
}: {
     params: Promise<{ id: string }>;
}) {
     const id = (await params).id;
     const vehicle = await getVehicleById({ id });
     const tyreSettings = (await getAllTyreSettings()).data ?? [];

     if (!vehicle) return notFound();

     return <UpdateVehicleForm vehicle={vehicle} tyreSettings={tyreSettings} />;
}

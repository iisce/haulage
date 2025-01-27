import UpdateAdminForm from "@/components/forms/update-admin-form";
import { getAdminById } from "@/data/admin";
import { notFound } from "next/navigation";

export default async function SingleVehiclePage({
     params,
}: {
     params: Promise<{ id: string }>;
}) {
     const id = (await params).id;
     const admin = await getAdminById({ id });
     if (!admin) return notFound();
     return <UpdateAdminForm admin={admin} />;
}

"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { BASE_URL } from "@/constants";
import { tyreSettings } from "@prisma/client";

interface TyreSettingData {
     name: string;
     number_of_tyres: number;
     fee: number;
}

async function checkSuperAdminAuth() {
     const session = await auth();
     if (session?.user?.role !== "SUPER_ADMIN") {
          throw new Error(
               "Unauthorized: Only SUPER_ADMIN can perform this action",
          );
     }
}

export async function createTyreSetting(formData: FormData) {
     await checkSuperAdminAuth();
     const data: TyreSettingData = {
          name: formData.get("name") as string,
          number_of_tyres: parseInt(formData.get("number_of_tyres") as string),
          fee: parseFloat(formData.get("fee") as string),
     };
     const response = await fetch(`${BASE_URL}/api/tyresettings/create`, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
     });

     if (!response.ok) {
          throw new Error("Failed to create tyre setting");
     }

     revalidatePath("/settings");
     return await response.json();
}

export async function getAllTyreSettings() {
     await checkSuperAdminAuth();
     const request = await fetch(`${BASE_URL}/api/tyresettings/all`);
     const response = await request.json();

     if (!request.ok) {
          return {
               success: false,
               error: response.message ?? "Failed to fetch tyre settings",
          };
     }
     const tyreSettings: tyreSettings[] = response.data.tyreSettings;
     return {
          success: true,
          data: tyreSettings,
     };
}

export async function getTyreSetting(id: string) {
     await checkSuperAdminAuth();
     const response = await fetch(`${BASE_URL}/api/tyresettings/one/${id}`);

     if (!response.ok) {
          throw new Error("Failed to fetch tyre setting");
     }

     return await response.json();
}

export async function updateTyreSetting(id: string, formData: FormData) {
     await checkSuperAdminAuth();
     const data: TyreSettingData = {
          name: formData.get("name") as string,
          number_of_tyres: parseInt(formData.get("number_of_tyres") as string),
          fee: parseFloat(formData.get("fee") as string),
     };
     const response = await fetch(`${BASE_URL}/api/tyresettings/update/${id}`, {
          method: "PATCH",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
     });

     if (!response.ok) {
          throw new Error("Failed to update tyre setting");
     }

     revalidatePath("/settings");
     return await response.json();
}

export async function deleteTyreSetting(id: string) {
     await checkSuperAdminAuth();
     const response = await fetch(`${BASE_URL}/api/tyresettings/delete/${id}`, {
          method: "PATCH",
     });

     if (!response.ok) {
          throw new Error("Failed to delete tyre setting");
     }

     revalidatePath("/settings");
     return await response.json();
}

export async function restoreTyreSetting(id: string) {
     await checkSuperAdminAuth();
     const response = await fetch(
          `${BASE_URL}/api/tyresettings/restore/${id}`,
          {
               method: "PATCH",
          },
     );

     if (!response.ok) {
          throw new Error("Failed to restore tyre setting");
     }

     revalidatePath("/settings");
     return await response.json();
}

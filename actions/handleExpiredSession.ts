"use server";

import { logout } from "@/actions/logout";
import { redirect } from "next/navigation";

export async function handleExpiredSession() {
     await logout();
     redirect("/sign-in");
}

"use server";

import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export const logout = async () => {
     await signOut();
     redirect("/sign-in"); // Redirect to the login page after signing out
};

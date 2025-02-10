import React from "react";
import FormError from "./shared/FormError";
import { getCurrentUser } from "@/data/users";
import { Role } from "@prisma/client";

export const revalidate = 0;

export default async function RoleGate({
     children,
     options,
}: {
     children: React.ReactNode;
     options: {
          allowedRole?: Role;
          rejectedRole?: Role;
     };
}) {
     const { allowedRole, rejectedRole } = options;

     const currentUser = await getCurrentUser();

     const role = currentUser?.role;

     if (allowedRole && role?.toLowerCase() !== allowedRole.toLowerCase()) {
          return <FormError message="Access Denied" />;
     }

     if (rejectedRole && role?.toLowerCase() === rejectedRole.toLowerCase()) {
          return <FormError message="Access Denied" />;
     }

     return <>{children}</>;
}

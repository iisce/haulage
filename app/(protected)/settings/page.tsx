import { auth } from "@/auth";
import TyreSettingsSection from "@/components/TyreSettingsSection";

export default async function SettingsPage() {
     const session = await auth();

     return (
          <div className="container mx-auto py-8">
               {session?.user?.role === "SUPER_ADMIN" && (
                    <TyreSettingsSection />
               )}
          </div>
     );
}

import { getAllTyreSettings } from "@/actions/settings/tyre";
import { auth } from "@/auth";
import TyreSettingsSection from "@/components/TyreSettingsSection";

export default async function SettingsPage() {
     const session = await auth();
     const tyreSettings = await getAllTyreSettings();
     console.log({ tyreSettings });

     return (
          <div className="container mx-auto py-8">
               <h1 className="mb-6 text-2xl font-bold">Settings</h1>
               {session?.user?.role === "SUPER_ADMIN" ? (
                    <TyreSettingsSection />
               ) : (
                    <p>You do not have permission to access tyre settings.</p>
               )}
               {/* Add other settings sections here */}
          </div>
     );
}

import { AdminCodeTable } from "@/components/admin-page/admin-confirmation-code-table";
import GenerateAdminConfirmationCodeForm from "@/components/forms/generate-admin-confirmation-code-form";
import { GENERATED_CODES } from "@/constants";
import { getCodes } from "@/data/codes";

export default async function GenerateCode() {
     // const codes = await getCodes();
     const codes = GENERATED_CODES;

     return (
          <>
               <GenerateAdminConfirmationCodeForm />
               <div className="mx-auto w-full max-w-3xl">
                    {codes && <AdminCodeTable codes={codes} />}
               </div>
          </>
     );
}

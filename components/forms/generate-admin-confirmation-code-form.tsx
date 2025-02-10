"use client";
import { generate } from "@/actions/confirmation-code";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function GenerateAdminConfirmationCodeForm() {
     const router = useRouter();
     const [form, setForm] = useState({
          emails: "",
     });
     const [error, setError] = useState<string | undefined>();
     const [success, setSuccess] = useState<string | undefined>();
     const [isPending, startTransition] = useTransition();

     const sendMail = async () => {
          startTransition(() => {
               generate(form)
                    .then((data) => {
                         if (data?.error) {
                              setError(data?.error);
                         }
                         if (data?.success) {
                              setSuccess(data?.success);
                              router.refresh();
                         }
                    })
                    .catch(() => setError("Something went wrong!"));
          });
     };
     return (
          <form
               action={sendMail}
               className="mx-auto w-full max-w-3xl space-y-4 px-4 py-10 md:px-6"
          >
               <div className="space-y-2">
                    <h1 className="text-3xl font-bold">
                         Generate Confirmation Code
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                         Enter your email addresses of admin to generate
                         confirmation code.
                    </p>
               </div>
               <div className="space-y-4">
                    <div className="space-y-2">
                         <Label htmlFor="emails">Email List</Label>
                         <Textarea
                              defaultValue={form.emails}
                              onChange={(e) => {
                                   setForm({
                                        ...form,
                                        emails: e.target.value,
                                   });
                              }}
                              id="emails"
                              placeholder="Enter email addresses separated by commas"
                              required
                         />
                    </div>
                    {error && <div className="text-destructive">{error}</div>}
                    {success && (
                         <div className="text-emerald-600">{success}</div>
                    )}
               </div>
               <Button type="submit" size="lg" disabled={isPending}>
                    {isPending ? (
                         <LoaderCircle className="h-4 w-4 animate-spin" />
                    ) : (
                         "Generate code"
                    )}
               </Button>
          </form>
     );
}

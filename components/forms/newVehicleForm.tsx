"use client";

import { createVehicle } from "@/actions/vehicles";
import { TYRE_TYPE } from "@/constants";
import { createVehicleFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import {
     Form,
     FormControl,
     FormField,
     FormItem,
     FormLabel,
     FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "../../components/ui/select";
import FormError from "../shared/FormError";
import FormSuccess from "../shared/FormSuccess";

export default function CreateVehicleForm() {
     const router = useRouter();
     const [error, setError] = useState<string | undefined>("");
     const [success, setSuccess] = useState<string | undefined>("");
     const [isPending, startTransition] = useTransition();
     const form = useForm<z.infer<typeof createVehicleFormSchema>>({
          resolver: zodResolver(createVehicleFormSchema),
          mode: "onChange",
          defaultValues: {
               category: "Non Detachable",
          },
     });

     const onSubmit = (values: z.infer<typeof createVehicleFormSchema>) => {
          setError(undefined);
          setSuccess(undefined);
          startTransition(() => {
               console.log({ values });
               createVehicle(values).then((data) => {
                    if (data?.error) {
                         setError(data.error);
                    }
                    if (data?.success) {
                         setSuccess(data.success);
                         form.reset();
                         router.push("/vehicles");
                    }
               });
          });
     };

     return (
          <Form {...form}>
               <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
               >
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                         <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>Vehicle Name</FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="Camry"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="platenumber"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>Plate Number</FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="123-ABC-4D"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="fee"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>Tyre Type</FormLabel>
                                        <Select
                                             onValueChange={field.onChange}
                                             defaultValue={field.value}
                                        >
                                             <FormControl>
                                                  <SelectTrigger>
                                                       <SelectValue placeholder="Choose a tyre type" />
                                                  </SelectTrigger>
                                             </FormControl>
                                             <SelectContent>
                                                  {TYRE_TYPE.map((type, k) => (
                                                       <SelectItem
                                                            key={k}
                                                            value={type.fee}
                                                       >
                                                            {type.name}
                                                       </SelectItem>
                                                  ))}
                                             </SelectContent>
                                        </Select>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="nin"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>NIN</FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="00123456789"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="driversname"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>
                                             Driver&apos;s Name
                                        </FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="Enter name of driver"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="phonenumber"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>
                                             Driver&apos;s Phone Number
                                        </FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="08012345678"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         {/* <FormField
                              control={form.control}
                              name="category"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>
                                             Category
                                        </FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder=""
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         /> */}
                    </div>
                    {error && (
                         <FormError
                              className="w-full lg:col-span-2"
                              message={error}
                         />
                    )}
                    {success && (
                         <FormSuccess
                              className="w-full lg:col-span-2"
                              message={success}
                         />
                    )}
                    <div className="text-title1Bold flex items-center justify-center gap-6">
                         <Button
                              variant={"outline"}
                              size="lg"
                              type="button"
                              asChild
                              className="w-28 p-4 py-2"
                         >
                              <Link href={"/vehicles"}>Back</Link>
                         </Button>
                         <Button
                              type="submit"
                              className="w-28"
                              disabled={isPending}
                         >
                              {isPending ? (
                                   <Loader className="h-4 w-4 animate-spin" />
                              ) : (
                                   "Create vehicle"
                              )}
                         </Button>
                    </div>
               </form>
          </Form>
     );
}

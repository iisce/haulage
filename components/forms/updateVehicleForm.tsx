"use client";

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
import { Vehicle, tyreSettings } from "@prisma/client";
import { Switch } from "../ui/switch";
import { updateVehicle } from "@/actions/vehicles";

export default function UpdateVehicleForm({
     vehicle,
     tyreSettings,
}: {
     vehicle: Vehicle;
     tyreSettings: tyreSettings[];
}) {
     const {
          id,
          isDetachable,
          customerName,
          customerMobile,
          plateNumber,
          make,
          modelName,
          number_of_tyres,
     } = vehicle;
     const router = useRouter();
     const [error, setError] = useState<string | undefined>("");
     const [success, setSuccess] = useState<string | undefined>("");
     const [isPending, startTransition] = useTransition();
     const form = useForm<z.infer<typeof createVehicleFormSchema>>({
          resolver: zodResolver(createVehicleFormSchema),
          mode: "onChange",
          defaultValues: {
               make,
               modelName,
               isDetachable,
               lastName: customerName.split(" ")[0],
               firstName: customerName.split(" ")[1],
               customerMobile,
               plateNumber,
               number_of_tyres: String(number_of_tyres),
          },
     });

     const onSubmit = (values: z.infer<typeof createVehicleFormSchema>) => {
          setError(undefined);
          setSuccess(undefined);
          startTransition(() => {
               updateVehicle(id, values).then((data) => {
                    console.log(data);
                    if (data?.error) {
                         setError(data.error);
                    }
                    if (data?.success) {
                         setSuccess(data.success);
                         // router.push(`/vehicles/${id}`);
                    }
               });
          });
     };

     return (
          <Form {...form}>
               <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 p-5"
               >
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                         <FormField
                              control={form.control}
                              name="make"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>Vehicle Make</FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="SUV"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="modelName"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>Model Name</FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="Toyota"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="isDetachable"
                              render={({ field }) => (
                                   <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                        <div className="space-y-0.5">
                                             <FormLabel className="text-base">
                                                  Detachable
                                             </FormLabel>
                                        </div>
                                        <FormControl>
                                             <Switch
                                                  checked={field.value}
                                                  onCheckedChange={
                                                       field.onChange
                                                  }
                                             />
                                        </FormControl>
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>
                                             Driver&apos;s First Name
                                        </FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="John"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>
                                             Driver&apos;s Last Name
                                        </FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="Doe"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="customerMobile"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>
                                             Driver&apos;s Phone Number
                                        </FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="09088978776"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="number_of_tyres"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>Number of Tyres</FormLabel>
                                        <Select
                                             onValueChange={field.onChange}
                                             defaultValue={field.value}
                                        >
                                             <SelectTrigger>
                                                  <SelectValue placeholder="Select Tyre Number" />
                                             </SelectTrigger>
                                             <SelectContent>
                                                  {tyreSettings.map(
                                                       (
                                                            { number_of_tyres },
                                                            i,
                                                       ) => (
                                                            <SelectItem
                                                                 key={i}
                                                                 value={String(
                                                                      number_of_tyres,
                                                                 )}
                                                            >
                                                                 {String(
                                                                      number_of_tyres,
                                                                 )}{" "}
                                                                 Tyres
                                                            </SelectItem>
                                                       ),
                                                  )}
                                             </SelectContent>
                                        </Select>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="plateNumber"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>Plate Number</FormLabel>
                                        <FormControl>
                                             <Input
                                                  disabled={isPending}
                                                  {...field}
                                                  placeholder="ABC123DE"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
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
                                   "Update vehicle"
                              )}
                         </Button>
                    </div>
               </form>
          </Form>
     );
}

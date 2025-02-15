"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { NextResponse } from "next/server";
import React, { useState } from "react";
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
import { useToast } from "../../components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";

const vehicleFormSchema = z
     .object({
          admin_phone_number: z
               .string({
                    required_error: "Enter admin phone number.",
               })
               .regex(/^\+234[789][01]\d{8}$/, "Phone format (+2348012345678)"),
          admin_name: z
               .string({
                    required_error: "Enter admin full name.",
               })
               .min(5, {
                    message: "Enter full name",
               }),
          admin_email_address: z
               .string()
               .email({ message: "Invalid email address" }),
          nin: z
               .string({
                    required_error: "Enter your NIN.",
               })
               .length(11, "Invalid NIN number"),
          residential_address: z
               .string({
                    required_error: "Enter admins residential address",
               })
               .min(5, "Invalid address"),
          password: z.string().min(4, "Password is not secure enough"),
          cpassword: z.string(),
     })
     .refine(
          (data) => {
               return data.password === data.cpassword;
          },
          { message: "Passwords don't match", path: ["cpassword"] },
     );

type vehicleFormValues = z.infer<typeof vehicleFormSchema>;

const defaultValues: Partial<vehicleFormValues> = {
     nin: "",
     admin_phone_number: "",
     admin_email_address: "",
     admin_name: "",
     residential_address: "",
     password: "",
     cpassword: "",
};

export default function CreateAdminForm({ id }: { id: string }) {
     const [hidePassword, setHidePassword] = useState(false);
     const [chidePassword, setcHidePassword] = useState(false);
     const [newVehicleId, setNewVehicleId] = React.useState<string>("");
     const { toast } = useToast();
     const [isLoading, setIsLoading] = React.useState<boolean>(false);
     const [open, setOpen] = React.useState(false);
     const form = useForm<vehicleFormValues>({
          resolver: zodResolver(vehicleFormSchema),
          defaultValues,
          mode: "onChange",
     });

     const onSubmit = async (data: vehicleFormValues) => {
          setIsLoading(true);
          try {
               const createVehicleResponse = await fetch(
                    "/api/create-vehicle",
                    {
                         method: "POST",
                         body: JSON.stringify({
                              nin: data.nin,
                              admin_phone_number: data.admin_phone_number,
                              admin_email_address: data.admin_email_address,
                              admin_name: data.admin_name,
                              residential_address: data.residential_address,
                              password: data.password,
                              cpassword: data.cpassword,
                         }),
                    },
               );
               const result = await createVehicleResponse.json();
               if (
                    createVehicleResponse.status > 199 &&
                    createVehicleResponse.status < 299
               ) {
                    toast({
                         title: "Admin Created Successfully",
                    });
                    setIsLoading(false);
                    setOpen(true);
                    form.reset();
                    setNewVehicleId(result.data.vehicle_id);
                    return NextResponse.json(result);
               } else {
                    console.log(createVehicleResponse);
                    setIsLoading(false);
                    toast({
                         title: "Admin NOT Created",
                    });
                    return NextResponse.json(result);
               }
          } catch (error) {
               setIsLoading(false);
          }
     };

     return (
          <Form {...form}>
               <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
               >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                         <FormField
                              name="admin_name"
                              control={form.control}
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel className="text-title1Bold pl-4">
                                             {`Admin's Full Name`}
                                        </FormLabel>

                                        <FormControl>
                                             <Input
                                                  className="text-body relative flex h-14 items-center rounded-2xl"
                                                  {...field}
                                                  type="text"
                                                  placeholder={`Enter admin's name`}
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />

                         <FormField
                              name="admin_phone_number"
                              control={form.control}
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel className="text-title1Bold pl-4">
                                             {`Admin's Phone Number`}
                                        </FormLabel>

                                        <FormControl>
                                             <Input
                                                  className="text-body relative flex h-14 items-center rounded-2xl"
                                                  {...field}
                                                  type="text"
                                                  placeholder={`+23481209847859`}
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />

                         <FormField
                              name="admin_email_address"
                              control={form.control}
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel className="text-title1Bold pl-4">
                                             {`Admin's Email Address`}
                                        </FormLabel>

                                        <FormControl>
                                             <Input
                                                  className="text-body relative flex h-14 items-center rounded-2xl"
                                                  {...field}
                                                  type="text"
                                                  placeholder={`person@gmail.com`}
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />

                         <FormField
                              name="residential_address"
                              control={form.control}
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel className="text-title1Bold pl-4">
                                             {`Residential Address`}
                                        </FormLabel>

                                        <FormControl>
                                             <Input
                                                  className="text-body relative flex h-14 items-center rounded-2xl"
                                                  {...field}
                                                  type="text"
                                                  placeholder={`Street, LGA`}
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />

                         <FormField
                              name="nin"
                              control={form.control}
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel className="text-title1Bold pl-4">
                                             NIN
                                        </FormLabel>

                                        <FormControl>
                                             <Input
                                                  className="text-body relative flex h-14 items-center rounded-2xl"
                                                  {...field}
                                                  type="text"
                                                  placeholder="Enter NIN"
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              name="password"
                              control={form.control}
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel className="text-title1Bold pl-4">
                                             Password
                                        </FormLabel>
                                        <div className="relative h-14">
                                             <FormControl>
                                                  <Input
                                                       className="text-body relative flex h-14 items-center rounded-2xl pr-[50px]"
                                                       {...field}
                                                       type={
                                                            hidePassword
                                                                 ? "password"
                                                                 : "text"
                                                       }
                                                       placeholder="Enter password"
                                                  />
                                             </FormControl>
                                             <div
                                                  onClick={() =>
                                                       setHidePassword(
                                                            !hidePassword,
                                                       )
                                                  }
                                             >
                                                  {hidePassword ? (
                                                       <EyeOff className="absolute right-[20px] top-0 translate-y-[60%] cursor-pointer" />
                                                  ) : (
                                                       <Eye className="absolute right-[20px] top-0 translate-y-[60%] cursor-pointer" />
                                                  )}
                                             </div>
                                        </div>

                                        <FormMessage />
                                   </FormItem>
                              )}
                         />

                         <FormField
                              name="cpassword"
                              control={form.control}
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel className="text-title1Bold pl-4">
                                             Confirm Password
                                        </FormLabel>
                                        <div className="relative h-14">
                                             <FormControl>
                                                  <Input
                                                       className="text-body relative flex h-14 items-center rounded-2xl pr-[50px]"
                                                       {...field}
                                                       type={
                                                            chidePassword
                                                                 ? "password"
                                                                 : "text"
                                                       }
                                                       placeholder="Comfirm password"
                                                  />
                                             </FormControl>
                                             <div
                                                  onClick={() =>
                                                       setcHidePassword(
                                                            !chidePassword,
                                                       )
                                                  }
                                             >
                                                  {chidePassword ? (
                                                       <EyeOff className="absolute right-[20px] top-0 translate-y-[60%] cursor-pointer" />
                                                  ) : (
                                                       <Eye className="absolute right-[20px] top-0 translate-y-[60%] cursor-pointer" />
                                                  )}
                                             </div>
                                        </div>

                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                    </div>
                    <div className="text-title1Bold flex items-center justify-center gap-6">
                         <Button
                              variant={"outline"}
                              size="lg"
                              type="button"
                              asChild
                              className="rounded-normal w-28 p-4 py-2"
                         >
                              <Link href={"/admins?page=1&limit=15"}>Back</Link>
                         </Button>
                         <Button
                              variant="default"
                              size="lg"
                              type="submit"
                              className="rounded-normal w-28 p-4 py-2"
                         >
                              {"Add Admin"}
                         </Button>
                    </div>
               </form>
          </Form>
     );
}

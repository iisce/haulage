"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Eye, EyeOff, PencilLine, Save } from "lucide-react";
import { ADMINTYPE } from "../admin-page/admin-table";

const vehicleFormSchema = z.object({
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
  admin_email_address: z.string().email({ message: "Invalid email address" }),
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
});

type vehicleFormValues = z.infer<typeof vehicleFormSchema>;

export default function UpdateAdminForm({
  admin,
}: {
  admin: ADMINTYPE | undefined;
}) {
  const defaultValues: Partial<vehicleFormValues> = {
    nin: admin?.nin,
    admin_phone_number: admin?.admin_phone_number,
    admin_email_address: admin?.admin_email_address,
    admin_name: admin?.admin_name,
    residential_address: admin?.residential_address,
  };

  const [isDisabled, setIsDisabled] = useState(false);
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
      const createVehicleResponse = await fetch("/api/create-vehicle", {
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
      });
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
    <div className="flex flex-col  pt-[20px] w-full">
      <div className="pl-5 py-3 text-lg">UPDATE ADMIN INFORMATION</div>
      <div className="my-4 mx-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="relative text-body flex  items-center h-14 rounded-2xl"
                        {...field}
                        type="text"
                        disabled={!isDisabled}
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
                        className="relative text-body flex  items-center h-14 rounded-2xl"
                        {...field}
                        type="text"
                        disabled={!isDisabled}
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
                        className="relative text-body flex  items-center h-14 rounded-2xl"
                        {...field}
                        type="text"
                        disabled={!isDisabled}
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
                        className="relative text-body flex  items-center h-14 rounded-2xl"
                        {...field}
                        type="text"
                        disabled={!isDisabled}
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
                    <FormLabel className="text-title1Bold pl-4">NIN</FormLabel>

                    <FormControl>
                      <Input
                        className="relative text-body flex  items-center h-14 rounded-2xl"
                        {...field}
                        type="text"
                        disabled
                        placeholder="Enter NIN"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center items-center gap-6 text-title1Bold">
              <Button
                variant="default"
                size="lg"
                onClick={() => setIsDisabled(!isDisabled)}
                type="button"
                className="p-4 py-2 rounded-normal w-28"
              >
                {"Edit"} <PencilLine className="w-5 h-5 ml-3" />
              </Button>
              <Button
                variant={"outline"}
                size="lg"
                disabled={!isDisabled}
                type="submit"
                className="p-4 py-2 rounded-normal w-28 "
              >
                Save <Save className="w-5 h-5 ml-3" />{" "}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

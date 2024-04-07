"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { NextResponse } from "next/server";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent } from "../../components/ui/dialog";
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
import { useToast } from "../../components/ui/use-toast";

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
  admin_email_address: z.string().email(),
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
});

type vehicleFormValues = z.infer<typeof vehicleFormSchema>;

const defaultValues: Partial<vehicleFormValues> = {
  nin: "",
  admin_phone_number: "",
  admin_email_address: "",
  admin_name: "",
  residential_address: "",
};

export default function CreateAdminForm() {
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
                  {`Admin Full Name`}
                </FormLabel>

                <FormControl>
                  <Input
                    className="relative text-body flex  items-center h-14 rounded-2xl"
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
                    className="relative text-body flex  items-center h-14 rounded-2xl"
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
                    className="relative text-body flex  items-center h-14 rounded-2xl"
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
                    className="relative text-body flex  items-center h-14 rounded-2xl"
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
                <FormLabel className="text-title1Bold pl-4">NIN</FormLabel>

                <FormControl>
                  <Input
                    className="relative text-body flex  items-center h-14 rounded-2xl"
                    {...field}
                    type="text"
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
            variant={"outline"}
            size="lg"
            type="button"
            asChild
            className="p-4 py-2 rounded-normal w-28 "
          >
            <Link href={"/vehicles?page=1&limit=15"}>Back</Link>
          </Button>
          <Button
            variant="default"
            size="lg"
            type="submit"
            className="p-4 py-2 rounded-normal w-28"
          >
            {"Add Admin"}
          </Button>
        </div>
      </form>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-secondary">
          <div className="mx-auto flex-col">
            <div className="flex flex-col items-center gap-5 mb-5">
              <div className="h-20 w-20 text-awesome-foreground">
                {/* {successIcon} */}
              </div>
              <div className="text-xl">Admin created successfully.</div>
              <div className="text-sm">Proceed to add a driver.</div>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild className="rounded-xl">
                <Link href={`/vehicles/${newVehicleId}/new-driver`}>
                  Add Driver
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Form>
  );
}

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { NextResponse } from "next/server";
import React, { useState } from "react";
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
import { useToast } from "../../components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { Textarea } from "../ui/textarea";

const vehicleFormSchema = z
  .object({
    settings_value: z
      .string({
        required_error: "Enter settings value.",
      }).max(20, "Invalid value number"),
      settings_name: z
      .string({
        required_error: "Enter settings name.",
      })
      .min(5, {
        message: "Enter full name",
      }),
      description: z.string({
        required_error: "Enter valid description",
      }).max(10, "Description is not enough")
  })

type vehicleFormValues = z.infer<typeof vehicleFormSchema>;

const defaultValues: Partial<vehicleFormValues> = {
  settings_value: "",
  settings_name: "",
  description: "",
};

export default function SettingsForm() {
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
      const createVehicleResponse = await fetch("/api/create-vehicle", {
        method: "POST",
        body: JSON.stringify({
          settings_value: data.settings_value,
          settings_name: data.settings_name,
          description: data.description,
        }),
      });
      const result = await createVehicleResponse.json();
      if (
        createVehicleResponse.status > 199 &&
        createVehicleResponse.status < 299
      ) {
        toast({
          title: "Settings Created Successfully",
        });
        setIsLoading(false);
        setOpen(true);
        form.reset();
        setNewVehicleId(result.data.vehicle_id);
        return NextResponse.json(result);
      } else {
        setIsLoading(false);
        toast({
          title: "Settings NOT Created",
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
        <div className="flex flex-col gap-4">
          <FormField
            name="settings_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-title1Bold pl-4">
                  {`Settings Name`}
                </FormLabel>

                <FormControl>
                  <Input
                    className="relative text-body flex  items-center h-14 rounded-2xl"
                    {...field}
                    type="text"
                    placeholder={`Enter settings name`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="settings_value"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-title1Bold pl-4">
                  {`Value`}
                </FormLabel>

                <FormControl>
                  <Input
                    className="relative text-body flex  items-center h-14 rounded-2xl"
                    {...field}
                    type="text"
                    placeholder={`Enter Settings Value`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
                  <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-title1Bold pl-4">Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="resize-none"
                  {...field}
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
            type="submit"
            className="p-4 py-2 rounded-normal w-28"
          >
            {"Add Settings"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

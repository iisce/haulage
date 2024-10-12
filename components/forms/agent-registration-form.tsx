"use client";

import { createAgent } from "@/actions/agents";
import { Button } from "@/components/ui/button";
import {
     Form,
     FormControl,
     FormField,
     FormItem,
     FormLabel,
     FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ANAMBRA_LGA_LIST, ANAMBRA_LOCATION_LIST } from "@/constants";
import { AgentRegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import FormError from "../shared/FormError";
import FormSuccess from "../shared/FormSuccess";
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "../ui/select";

export default function AgentRegistrationForm() {
     const router = useRouter();
     const [error, setError] = useState<string | undefined>("");
     const [success, setSuccess] = useState<string | undefined>("");
     const [isPending, startTransition] = useTransition();
     const form = useForm<z.infer<typeof AgentRegisterSchema>>({
          resolver: zodResolver(AgentRegisterSchema),
          mode: "onChange",
     });

     const onSubmit = (values: z.infer<typeof AgentRegisterSchema>) => {
          setError(undefined);
          setSuccess(undefined);
          startTransition(() => {
               createAgent(values).then((data) => {
                    if (data?.error) {
                         console.log({ data });
                         setError(data.error);
                    }
                    if (data?.success) {
                         setSuccess(data.success);

                         form.reset();
                         router.push("/agents");
                    }
               });
          });
     };

     return (
          <Form {...form}>
               <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
               >
                    <FormField
                         control={form.control}
                         name="fullname"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>Full Name</FormLabel>
                                   <FormControl>
                                        <Input
                                             disabled={isPending}
                                             {...field}
                                             placeholder="John Doe"
                                        />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <FormField
                         control={form.control}
                         name="email"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>Email</FormLabel>
                                   <FormControl>
                                        <Input
                                             disabled={isPending}
                                             {...field}
                                             type="email"
                                             placeholder="m@example.com"
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
                                   <FormLabel>Phone Number</FormLabel>
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
                         name="lga"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>LGA</FormLabel>
                                   <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                   >
                                        <FormControl>
                                             <SelectTrigger>
                                                  <SelectValue placeholder="Choose a local government" />
                                             </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                             {ANAMBRA_LGA_LIST.map((lga, k) => (
                                                  <SelectItem
                                                       key={k}
                                                       value={lga.value}
                                                  >
                                                       {lga.name}
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
                         name="password"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>Password</FormLabel>
                                   <FormControl>
                                        <Input
                                             disabled={isPending}
                                             {...field}
                                             type="password"
                                             placeholder="*** ***"
                                        />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <FormField
                         control={form.control}
                         name="confirmpassword"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>Confirm Password</FormLabel>
                                   <FormControl>
                                        <Input
                                             disabled={isPending}
                                             {...field}
                                             type="password"
                                             placeholder="*** ***"
                                        />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <FormField
                         control={form.control}
                         name="location"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>Location</FormLabel>
                                   <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                   >
                                        <FormControl>
                                             <SelectTrigger>
                                                  <SelectValue placeholder="Choose a local government" />
                                             </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                             {ANAMBRA_LOCATION_LIST.map(
                                                  (location, k) => (
                                                       <SelectItem
                                                            key={k}
                                                            value={
                                                                 location.value
                                                            }
                                                       >
                                                            {location.name}
                                                       </SelectItem>
                                                  ),
                                             )}
                                        </SelectContent>
                                   </Select>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
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

                    <Button
                         type="submit"
                         className="w-full lg:col-span-2"
                         disabled={isPending}
                    >
                         {isPending ? (
                              <Loader className="h-4 w-4 animate-spin" />
                         ) : (
                              "Create new agent"
                         )}
                    </Button>
               </form>
          </Form>
     );
}

"use client";
import { axiosWithAuth } from "@/lib/axios.config";
import { updateAdminFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PencilLine, Save } from "lucide-react";
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
import { useToast } from "../../components/ui/use-toast";
import { User } from "@prisma/client";

type adminFormValues = z.infer<typeof updateAdminFormSchema>;

export default function UpdateAdminForm({ admin }: { admin: User }) {
     const defaultValues: Partial<adminFormValues> = {
          email: admin.email,
          nin: admin?.nin ?? "",
          phonenumber: admin.phonenumber,
          fullname: `${admin?.firstName} ${admin?.lastName}`,
          lga: admin.lga ?? "",
     };

     const [isDisabled, setIsDisabled] = useState(false);
     const { toast } = useToast();
     const [isPending, startTransition] = useTransition();
     const form = useForm<adminFormValues>({
          resolver: zodResolver(updateAdminFormSchema),
          defaultValues,
          mode: "onChange",
     });

     const onSubmit = async (data: adminFormValues) => {
          startTransition(async () => {
               try {
                    const updateAdminResponse = await axiosWithAuth.put(
                         "/admin",
                         data,
                    );
                    if (updateAdminResponse.data) {
                         const result = await updateAdminResponse.data;
                         toast({
                              title: "Admin Created Successfully",
                         });
                         console.log(result);
                         form.reset();
                         return result;
                    }
               } catch (error) {
                    console.log(error);
               }
          });
     };

     return (
          <div className="flex w-full flex-col pt-[20px]">
               <div className="py-3 pl-5 text-lg">UPDATE ADMIN INFORMATION</div>
               <div className="mx-4 my-4">
                    <Form {...form}>
                         <form
                              onSubmit={form.handleSubmit(onSubmit)}
                              className="flex flex-col gap-4"
                         >
                              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                   <FormField
                                        name="fullname"
                                        control={form.control}
                                        render={({ field }) => (
                                             <FormItem>
                                                  <FormLabel className="text-title1Bold pl-4">
                                                       Full Name
                                                  </FormLabel>

                                                  <FormControl>
                                                       <Input
                                                            className="text-body relative flex h-14 items-center rounded-2xl"
                                                            {...field}
                                                            type="text"
                                                            disabled={isPending}
                                                            placeholder={`Enter admin's name`}
                                                       />
                                                  </FormControl>
                                                  <FormMessage />
                                             </FormItem>
                                        )}
                                   />
                                   <FormField
                                        name="phonenumber"
                                        control={form.control}
                                        render={({ field }) => (
                                             <FormItem>
                                                  <FormLabel className="text-title1Bold pl-4">
                                                       {` Phone Number`}
                                                  </FormLabel>

                                                  <FormControl>
                                                       <Input
                                                            className="text-body relative flex h-14 items-center rounded-2xl"
                                                            {...field}
                                                            type="text"
                                                            disabled={
                                                                 !isDisabled
                                                            }
                                                            placeholder={`+23481209847859`}
                                                       />
                                                  </FormControl>
                                                  <FormMessage />
                                             </FormItem>
                                        )}
                                   />
                                   <FormField
                                        name="email"
                                        control={form.control}
                                        render={({ field }) => (
                                             <FormItem>
                                                  <FormLabel className="text-title1Bold pl-4">
                                                       {`Email Address`}
                                                  </FormLabel>

                                                  <FormControl>
                                                       <Input
                                                            className="text-body relative flex h-14 items-center rounded-2xl"
                                                            {...field}
                                                            type="text"
                                                            disabled={
                                                                 !isDisabled
                                                            }
                                                            placeholder={`person@gmail.com`}
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
                                                            disabled
                                                            placeholder="Enter NIN"
                                                       />
                                                  </FormControl>
                                                  <FormMessage />
                                             </FormItem>
                                        )}
                                   />
                              </div>
                              <div className="text-title1Bold flex items-center justify-center gap-6">
                                   <Button
                                        variant="default"
                                        size="lg"
                                        onClick={() =>
                                             setIsDisabled(!isDisabled)
                                        }
                                        type="button"
                                        className="rounded-normal w-28 p-4 py-2"
                                   >
                                        {"Edit"}{" "}
                                        <PencilLine className="ml-3 h-5 w-5" />
                                   </Button>
                                   <Button
                                        variant={"outline"}
                                        size="lg"
                                        disabled={!isDisabled}
                                        type="submit"
                                        className="rounded-normal w-28 p-4 py-2"
                                   >
                                        Save <Save className="ml-3 h-5 w-5" />{" "}
                                   </Button>
                              </div>
                         </form>
                    </Form>
               </div>
          </div>
     );
}

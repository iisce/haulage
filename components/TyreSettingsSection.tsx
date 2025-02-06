"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import {
     createTyreSetting,
     getAllTyreSettings,
     updateTyreSetting,
     deleteTyreSetting,
     restoreTyreSetting,
} from "@/actions/settings/tyre";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import { tyreSettings } from "@prisma/client";
import { Loader } from "lucide-react";

export default function TyreSettingsSection() {
     const { data: session } = useSession();
     const [tyreSettings, setTyreSettings] = useState<tyreSettings[]>([]);
     const [isDeleting, setIsDeleting] = useState<boolean>(false);
     const [isRestoring, setIsRestoring] = useState<boolean>(false);
     const [editingId, setEditingId] = useState<string | null>(null);
     const { register, handleSubmit, reset, setValue } =
          useForm<tyreSettings>();

     const isSuperAdmin = session?.user?.role === "SUPER_ADMIN";

     useEffect(() => {
          if (isSuperAdmin) {
               fetchTyreSettings();
          }
     }, [isSuperAdmin]);

     async function fetchTyreSettings() {
          try {
               const settings = await getAllTyreSettings();
               if (!settings.success) {
                    setTyreSettings([]);
               } else {
                    setTyreSettings(settings.data!);
               }
          } catch (error) {
               toast.error("Error", {
                    description: "Failed to fetch tyre settings",
               });
          }
     }

     async function onSubmit(data: tyreSettings) {
          try {
               const formData = new FormData();
               formData.append("name", data.name);
               formData.append(
                    "number_of_tyres",
                    data.number_of_tyres.toString(),
               );
               formData.append("fee", data.fee.toString());

               if (editingId) {
                    await updateTyreSetting(editingId, formData);
                    toast.success("Success", {
                         description: "Tyre setting updated successfully",
                    });
                    setEditingId(null);
               } else {
                    await createTyreSetting(formData);
                    toast.success("Success", {
                         description: "Tyre setting created successfully",
                    });
               }
               reset();
               fetchTyreSettings();
          } catch (error) {
               toast.error("Error", {
                    description: "Failed to save tyre setting",
               });
          }
     }

     async function handleDelete(id: string) {
          try {
               setIsDeleting(true);
               await deleteTyreSetting(id);
               toast.success("Success", {
                    description: "Tyre setting deleted successfully",
               });
               fetchTyreSettings();

               setIsDeleting(false);
          } catch (error) {
               toast.error("Error", {
                    description: "Failed to delete tyre setting",
               });

               setIsDeleting(false);
          }
     }

     async function handleRestore(id: string) {
          try {
               setIsRestoring(true);
               await restoreTyreSetting(id);
               toast.success("Success", {
                    description: "Tyre setting restored successfully",
               });
               fetchTyreSettings();
               setIsRestoring(false);
          } catch (error) {
               toast.error("Error", {
                    description: "Failed to restore tyre setting",
               });
               setIsRestoring(false);
          }
     }

     function handleEdit(setting: tyreSettings) {
          setEditingId(setting.id);
          setValue("name", setting.name);
          setValue("number_of_tyres", setting.number_of_tyres);
          setValue("fee", setting.fee);
     }

     if (!isSuperAdmin) {
          return (
               <Card>
                    <CardHeader>
                         <CardTitle>Tyre Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p>
                              You do not have permission to view or manage tyre
                              settings.
                         </p>
                    </CardContent>
               </Card>
          );
     }

     return (
          <Card>
               <CardHeader>
                    <CardTitle>Tyre Settings</CardTitle>
               </CardHeader>
               <CardContent>
                    <form
                         onSubmit={handleSubmit(onSubmit)}
                         className="mb-6 space-y-4"
                    >
                         <div>
                              <Label htmlFor="name">Name</Label>
                              <Input
                                   id="name"
                                   {...register("name", { required: true })}
                              />
                         </div>
                         <div>
                              <Label htmlFor="number_of_tyres">
                                   Number of Tyres
                              </Label>
                              <Input
                                   id="number_of_tyres"
                                   type="number"
                                   {...register("number_of_tyres", {
                                        required: true,
                                        valueAsNumber: true,
                                        min: 1,
                                   })}
                              />
                         </div>
                         <div>
                              <Label htmlFor="fee">Fee</Label>
                              <Input
                                   id="fee"
                                   type="number"
                                   step="0.01"
                                   {...register("fee", {
                                        required: true,
                                        valueAsNumber: true,
                                        min: 0,
                                   })}
                              />
                         </div>
                         <Button type="submit">
                              {editingId ? "Update" : "Create"} Tyre Setting
                         </Button>
                    </form>

                    <Table>
                         <TableHeader>
                              <TableRow>
                                   <TableHead>Name</TableHead>
                                   <TableHead>Number of Tyres</TableHead>
                                   <TableHead>Fee</TableHead>
                                   <TableHead>Actions</TableHead>
                              </TableRow>
                         </TableHeader>
                         <TableBody>
                              {tyreSettings.length > 0 ? (
                                   tyreSettings.map((setting) => (
                                        <TableRow key={setting.id}>
                                             <TableCell>
                                                  {setting.name}
                                             </TableCell>
                                             <TableCell>
                                                  {setting.number_of_tyres}
                                             </TableCell>
                                             <TableCell>
                                                  ₦ {setting.fee.toFixed(2)}
                                             </TableCell>
                                             <TableCell>
                                                  <Button
                                                       variant="outline"
                                                       onClick={() =>
                                                            handleEdit(setting)
                                                       }
                                                       className="mr-2"
                                                  >
                                                       Edit
                                                  </Button>
                                                  {!setting.deletedAt && (
                                                       <Button
                                                            variant="destructive"
                                                            onClick={() =>
                                                                 handleDelete(
                                                                      setting.id,
                                                                 )
                                                            }
                                                            disabled={
                                                                 isDeleting
                                                            }
                                                            className="mr-2"
                                                       >
                                                            {isDeleting ? (
                                                                 <Loader className="h-4 w-4 animate-spin" />
                                                            ) : (
                                                                 "Delete"
                                                            )}
                                                       </Button>
                                                  )}
                                                  {setting.deletedAt && (
                                                       <Button
                                                            variant="secondary"
                                                            onClick={() =>
                                                                 handleRestore(
                                                                      setting.id,
                                                                 )
                                                            }
                                                            disabled={
                                                                 isRestoring
                                                            }
                                                       >
                                                            {isRestoring ? (
                                                                 <Loader className="h-4 w-4 animate-spin" />
                                                            ) : (
                                                                 "Restore"
                                                            )}
                                                       </Button>
                                                  )}
                                             </TableCell>
                                        </TableRow>
                                   ))
                              ) : (
                                   <TableRow>
                                        <TableCell colSpan={4}>
                                             No tyre settings found
                                        </TableCell>
                                   </TableRow>
                              )}
                         </TableBody>
                    </Table>
               </CardContent>
          </Card>
     );
}

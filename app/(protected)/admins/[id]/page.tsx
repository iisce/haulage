import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getAdminById } from "@/data/admin";
import { PencilLine } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { getActivitiesById } from "@/data/activities";
import ActivitiesCard from "@/components/dashboard/activities-card";

export default async function SingleVehiclePage({
     params,
}: {
     params: Promise<{ id: string }>;
}) {
     const id = (await params).id;
     const admin = await getAdminById(id);
     const activities = await getActivitiesById(id);
     console.log({ activities });
     if (!admin) return notFound();
     return (
          <div className="flex-1 p-8">
               <header className="mb-8 flex items-center justify-between">
                    <p className="text-2xl font-bold">
                         Admin {admin?.firstName} {admin?.lastName}
                    </p>
                    <div className="flex items-center gap-4">
                         <Button asChild>
                              <Link href={`/admins/${admin?.id}/edit`}>
                                   <PencilLine className="mr-2 h-5 w-5" />
                                   Edit Admin
                              </Link>
                         </Button>
                    </div>
               </header>
               <Card className="grid gap-8 rounded-lg bg-white p-4 dark:bg-gray-800 md:grid-cols-2 lg:grid-cols-3">
                    <div className="md:col-span-2">
                         <p className="mb-4 text-xl font-bold">
                              Personal Information
                         </p>
                         <div className="grid gap-4 md:grid-cols-2">
                              <div>
                                   <p className="mb-1 text-gray-500 dark:text-gray-400">
                                        ID
                                   </p>
                                   <p className="font-medium">{admin?.id}</p>
                              </div>
                              <div>
                                   <p className="mb-1 text-gray-500 dark:text-gray-400">
                                        Email
                                   </p>
                                   <p className="font-medium">{admin?.email}</p>
                              </div>
                              <div>
                                   <p className="mb-1 text-gray-500 dark:text-gray-400">
                                        Full Name
                                   </p>
                                   <p className="font-medium">
                                        {admin?.firstName} {admin?.lastName}
                                   </p>
                              </div>
                              <div>
                                   <p className="mb-1 text-gray-500 dark:text-gray-400">
                                        Phone Number
                                   </p>
                                   <p className="font-medium">
                                        {admin?.phonenumber}
                                   </p>
                              </div>
                              <div>
                                   <p className="mb-1 text-gray-500 dark:text-gray-400">
                                        Role
                                   </p>
                                   <p className="font-medium">{admin?.role}</p>
                              </div>
                              <div>
                                   <p className="mb-1 text-gray-500 dark:text-gray-400">
                                        Blacklist
                                   </p>
                                   <Badge
                                        variant={
                                             admin?.blacklist
                                                  ? "destructive"
                                                  : "default"
                                        }
                                   >
                                        {`${admin?.blacklist}`}
                                   </Badge>
                              </div>
                              <div>
                                   <p className="mb-1 text-gray-500 dark:text-gray-400">
                                        NIN
                                   </p>
                                   <p className="font-medium">{admin?.nin}</p>
                              </div>
                              <div>
                                   <p className="mb-1 text-gray-500 dark:text-gray-400">
                                        LGA
                                   </p>
                                   <p className="font-medium">{admin?.lga}</p>
                              </div>
                         </div>
                    </div>
                    <div>
                         <p className="mb-4 text-xl font-bold">Activity</p>
                         <div className="grid gap-4 md:grid-cols-1">
                              <div>
                                   <p className="mb-1 text-gray-500 dark:text-gray-400">
                                        Created At
                                   </p>
                                   <p className="font-medium">
                                        {format(
                                             new Date(admin.createdAt),
                                             "MMMM d, yyyy",
                                        )}
                                   </p>
                              </div>
                              <div>
                                   <p className="mb-1 text-gray-500 dark:text-gray-400">
                                        Updated At
                                   </p>
                                   <p className="font-medium">
                                        {format(
                                             new Date(admin.updatedAt),
                                             "MMMM d, yyyy",
                                        )}
                                   </p>
                              </div>
                         </div>
                    </div>
               </Card>
               <Separator className="my-4" />
               <div className="flex h-full w-full flex-col justify-between gap-3 p-3">
                    <div>
                         <p className="mb-2 text-xl">Recent Activities</p>
                         <Separator className="my-5" />
                         <div className="no-scrollbar grid gap-3 overflow-y-scroll">
                              {activities && activities.length > 0 ? (
                                   activities.map((activity, k) => (
                                        <ActivitiesCard
                                             key={k}
                                             title={activity.title}
                                             description={activity.message}
                                             date={new Date(
                                                  activity.createdAt,
                                             ).toDateString()}
                                             type={activity.type}
                                        />
                                   ))
                              ) : (
                                   <div>No Activities Yet </div>
                              )}
                         </div>
                    </div>
                    <Button asChild>
                         <Link href={"/activities"}>View All</Link>
                    </Button>
               </div>
          </div>
     );
}

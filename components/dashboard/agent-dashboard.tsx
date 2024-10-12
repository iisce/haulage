import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from "@/components/ui/table";
import { getVehicles } from "@/data/vehicles";
import { AlertTriangle, DollarSign, Truck, Users } from "lucide-react";
import Link from "next/link";

export default async function AgentDashboard() {
     const vehicles = await getVehicles();
     const totalVehicles = vehicles.length;
     const totalDrivers = new Set(vehicles.map((v) => v.driversname)).size;
     const totalRevenue = vehicles.reduce((sum, v) => sum + v.fee, 0);
     const blacklistedVehicles = vehicles.filter((v) => v.blacklist).length;
     return (
          // <div className="flex h-full flex-col gap-5 p-5 md:flex-row">
          //      <div className="flex w-full flex-col gap-5 md:w-3/4">
          //           <h2>Agent Dashboard</h2>

          //           <div className="flex flex-col flex-wrap gap-5 md:flex-row">
          //                <DashboardTotalDaily
          //                     title={"6 Tyres"}
          //                     description={"Total amount of Tyres daily"}
          //                     amount={"#1,800"}
          //                />
          //                <DashboardTotalDaily
          //                     title={"8 Tyres"}
          //                     description={"Total amount of Tyres daily"}
          //                     amount={"#1,800"}
          //                />
          //                <DashboardTotalDaily
          //                     title={"10 Tyres"}
          //                     description={"Total amount of Tyres daily"}
          //                     amount={"#1,800"}
          //                />
          //                <DashboardTotalDaily
          //                     title={"12 Tyres"}
          //                     description={"Total amount of Tyres daily"}
          //                     amount={"#1,800"}
          //                />
          //                <DashboardTotalDaily
          //                     title={"16 Tyres"}
          //                     description={"Total amount of Tyres daily"}
          //                     amount={"#1,800"}
          //                />
          //           </div>
          //      </div>
          //      <div className="hidden w-full flex-col gap-3 rounded-xl bg-secondary p-3 md:flex md:w-1/4">
          //           <h2 className="">Recent Activities</h2>
          //           <ActivitiesCard
          //                title={"Vehicle Registration"}
          //                description={"New Vehicle registered"}
          //                date={"12/04/2023 | 12:23PM"}
          //                icons={<User />}
          //           />
          //           <ActivitiesCard
          //                title={"Charge"}
          //                description={"Levy issued to Vehicle202"}
          //                date={"12/04/2023 | 12:23PM"}
          //                icons={<Landmark />}
          //           />
          //           <ActivitiesCard
          //                title={"Scan"}
          //                description={"New vehicle scanned"}
          //                date={"12/04/2023 | 12:23PM"}
          //                icons={<ScanBarcode />}
          //           />
          //           <ActivitiesCard
          //                title={"Agent Registration"}
          //                description={"New agent registered"}
          //                date={"12/04/2023 | 12:23PM"}
          //                icons={<UserPlusIcon />}
          //           />

          //           <Button>View All</Button>
          //      </div>
          // </div>
          <div className="container mx-auto p-4">
               <h1 className="mb-6 text-2xl font-bold">
                    Haulage Vehicles Dashboard
               </h1>

               <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-medium">
                                   Total Vehicles
                              </CardTitle>
                              <Truck className="h-4 w-4 text-muted-foreground" />
                         </CardHeader>
                         <CardContent>
                              <div className="text-2xl font-bold">
                                   {totalVehicles}
                              </div>
                         </CardContent>
                    </Card>
                    <Card>
                         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-medium">
                                   Total Drivers
                              </CardTitle>
                              <Users className="h-4 w-4 text-muted-foreground" />
                         </CardHeader>
                         <CardContent>
                              <div className="text-2xl font-bold">
                                   {totalDrivers}
                              </div>
                         </CardContent>
                    </Card>
                    <Card>
                         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-medium">
                                   Total Revenue
                              </CardTitle>
                              <DollarSign className="h-4 w-4 text-muted-foreground" />
                         </CardHeader>
                         <CardContent>
                              <div className="text-2xl font-bold">
                                   ₦{totalRevenue.toLocaleString()}
                              </div>
                         </CardContent>
                    </Card>
                    <Card>
                         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-medium">
                                   Blacklisted Vehicles
                              </CardTitle>
                              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                         </CardHeader>
                         <CardContent>
                              <div className="text-2xl font-bold">
                                   {blacklistedVehicles}
                              </div>
                         </CardContent>
                    </Card>
               </div>

               <Card>
                    <CardHeader>
                         <CardTitle>Haulage Vehicles</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Table>
                              <TableHeader>
                                   <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Plate Number</TableHead>
                                        <TableHead>
                                             Driver&apos;s Name
                                        </TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Fee</TableHead>
                                        <TableHead>Status</TableHead>
                                   </TableRow>
                              </TableHeader>
                              <TableBody>
                                   {vehicles.map((vehicle) => (
                                        <TableRow key={vehicle._id}>
                                             <TableCell>
                                                  <Link
                                                       href={`/vehicles/${vehicle._id}`}
                                                  >
                                                       {vehicle.name}
                                                  </Link>
                                             </TableCell>
                                             <TableCell>
                                                  {vehicle.platenumber}
                                             </TableCell>
                                             <TableCell>
                                                  {vehicle.driversname}
                                             </TableCell>
                                             <TableCell>
                                                  {vehicle.category}
                                             </TableCell>
                                             <TableCell>
                                                  ₦
                                                  {vehicle.fee.toLocaleString()}
                                             </TableCell>
                                             <TableCell>
                                                  <Badge
                                                       variant={
                                                            vehicle.blacklist
                                                                 ? "destructive"
                                                                 : "secondary"
                                                       }
                                                  >
                                                       {vehicle.blacklist
                                                            ? "Blacklisted"
                                                            : "Active"}
                                                  </Badge>
                                             </TableCell>
                                        </TableRow>
                                   ))}
                              </TableBody>
                         </Table>
                    </CardContent>
               </Card>
          </div>
     );
}

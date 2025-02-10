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
import { formatCurrency } from "@/lib/utils";
import { AlertTriangle, DollarSign, Truck } from "lucide-react";
import Link from "next/link";

export default async function AgentDashboard() {
     const vehicles = await getVehicles(0);
     return (
          <div className="container mx-auto p-4">
               <h1 className="mb-6 text-2xl font-bold">
                    Haulage Vehicles Dashboard
               </h1>

               <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle className="text-sm font-medium">
                                   Total Vehicles
                              </CardTitle>
                              <Truck className="h-4 w-4 text-muted-foreground" />
                         </CardHeader>
                         <CardContent>
                              <div className="text-2xl font-bold">
                                   {vehicles.count}
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
                              <div className="text-2xl font-bold">₦{20000}</div>
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
                              <div className="text-2xl font-bold">{0}</div>
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
                                   {vehicles.vehicles.map((vehicle, k) => (
                                        <TableRow key={k}>
                                             <TableCell>
                                                  <Link
                                                       href={`/vehicles/${vehicle.id}`}
                                                  >
                                                       {vehicle.id}
                                                  </Link>
                                             </TableCell>
                                             <TableCell>
                                                  {vehicle.plateNumber}
                                             </TableCell>
                                             <TableCell>
                                                  {vehicle.customerName}
                                             </TableCell>
                                             <TableCell>
                                                  {vehicle.make}
                                             </TableCell>
                                             <TableCell>
                                                  {formatCurrency(
                                                       vehicle.number_of_tyres *
                                                            100,
                                                  )}
                                             </TableCell>
                                             <TableCell>
                                                  <Badge
                                                       variant={
                                                            vehicle.isDetachable
                                                                 ? "destructive"
                                                                 : "secondary"
                                                       }
                                                  >
                                                       {vehicle.isDetachable
                                                            ? "Detachable"
                                                            : "Not Detachable"}
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

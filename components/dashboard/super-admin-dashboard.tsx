import { getAgents } from "@/data/agent";
import {
     ContactRound,
     Landmark,
     ScanBarcode,
     User,
     UserPlusIcon,
} from "lucide-react";
import { Suspense } from "react";
import { Button } from "../ui/button";
import ActivitiesCard from "./activities-card";
import DashboardTotalCard, {
     DashboardTotalCardSkeleton,
} from "./dashboard-total-card";
import DashboardTotalRevenue, {
     DashboardTotalRevenueSkeleton,
} from "./dashboard-total-revenue";

export default async function SuperAdminDashboard() {
     const agents = await getAgents();
     return (
          <div className="grid h-full w-full grid-cols-4 gap-4 p-5">
               <div className="col-span-4 flex w-full flex-col gap-5 pb-5 lg:col-span-3">
                    <div className="flex flex-col gap-5 md:flex-row">
                         <Suspense fallback={<DashboardTotalCardSkeleton />}>
                              <DashboardTotalCard
                                   title={"Admin"}
                                   description={"Total number of admins"}
                                   amount={0}
                              />
                         </Suspense>
                         <Suspense fallback={<DashboardTotalCardSkeleton />}>
                              <DashboardTotalCard
                                   title={"Agent"}
                                   description={"Total number of Agent"}
                                   amount={agents.length}
                              />
                         </Suspense>
                         <Suspense fallback={<DashboardTotalCardSkeleton />}>
                              <DashboardTotalCard
                                   title={"Vehicles"}
                                   description={"Total number of Vehicles"}
                                   amount={10000}
                              />
                         </Suspense>
                    </div>
                    <div className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
                         <Suspense fallback={<DashboardTotalRevenueSkeleton />}>
                              <DashboardTotalRevenue
                                   title={"Yearly"}
                                   description={
                                        "Total amount of yearly Revenue"
                                   }
                                   amount={19333}
                              />
                         </Suspense>
                         <Suspense fallback={<DashboardTotalRevenueSkeleton />}>
                              <DashboardTotalRevenue
                                   title={"Monthly"}
                                   description={
                                        "Total amount of monthly Revenue"
                                   }
                                   amount={99848}
                              />
                         </Suspense>
                         <Suspense fallback={<DashboardTotalRevenueSkeleton />}>
                              <DashboardTotalRevenue
                                   title={"Weekly"}
                                   description={
                                        "Total amount of weekly Revenue"
                                   }
                                   amount={88490}
                              />
                         </Suspense>
                         <Suspense fallback={<DashboardTotalRevenueSkeleton />}>
                              <DashboardTotalRevenue
                                   title={"Daily"}
                                   description={"Total amount of daily Revenue"}
                                   amount={475}
                              />
                         </Suspense>
                    </div>
               </div>
               <div className="col-span-4 hidden h-[calc(100svh-100px)] w-full md:flex lg:col-span-1">
                    <div className="flex w-full flex-col justify-between gap-3 rounded-lg bg-secondary p-3">
                         <p className="text-xl">Recent Activities</p>
                         <div className="no-scrollbar grid gap-3 overflow-y-scroll">
                              <ActivitiesCard
                                   title={"Vehicle Registration"}
                                   description={"New Vehicle registered"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<User />}
                              />
                              <ActivitiesCard
                                   title={"Charge"}
                                   description={"Levy issued to Vehicle202"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<Landmark />}
                              />
                              <ActivitiesCard
                                   title={"Scan"}
                                   description={"New vehicle scanned"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<ScanBarcode />}
                              />
                              <ActivitiesCard
                                   title={"Agent Registration"}
                                   description={"New agent registered"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<UserPlusIcon />}
                              />
                              <ActivitiesCard
                                   title={"Admin Registration"}
                                   description={"New admin registered"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<ContactRound />}
                              />
                              <ActivitiesCard
                                   title={"Vehicle Registration"}
                                   description={"New Vehicle registered"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<User />}
                              />
                              <ActivitiesCard
                                   title={"Charge"}
                                   description={"Levy issued to Vehicle202"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<Landmark />}
                              />
                              <ActivitiesCard
                                   title={"Scan"}
                                   description={"New vehicle scanned"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<ScanBarcode />}
                              />
                              <ActivitiesCard
                                   title={"Agent Registration"}
                                   description={"New agent registered"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<UserPlusIcon />}
                              />
                              <ActivitiesCard
                                   title={"Admin Registration"}
                                   description={"New admin registered"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<ContactRound />}
                              />
                              <ActivitiesCard
                                   title={"Vehicle Registration"}
                                   description={"New Vehicle registered"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<User />}
                              />
                              <ActivitiesCard
                                   title={"Charge"}
                                   description={"Levy issued to Vehicle202"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<Landmark />}
                              />
                              <ActivitiesCard
                                   title={"Scan"}
                                   description={"New vehicle scanned"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<ScanBarcode />}
                              />
                              <ActivitiesCard
                                   title={"Agent Registration"}
                                   description={"New agent registered"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<UserPlusIcon />}
                              />
                              <ActivitiesCard
                                   title={"Admin Registration"}
                                   description={"New admin registered"}
                                   date={"12/04/2023 | 12:23PM"}
                                   icons={<ContactRound />}
                              />
                         </div>
                         <Button>View All</Button>
                    </div>
               </div>
          </div>
     );
}

import React from "react";
import DashboardTotalCard from "./dashboard-total-card";
import DashoardTotalRevenue from "./dashboard-total-revenue";
import ActivitiesCard from "./activities-card";
import { Button } from "../ui/button";
import {
     ContactRound,
     Landmark,
     ScanBarcode,
     User,
     UserPlusIcon,
     UserRound,
     Users,
} from "lucide-react";
import DashboardTotalDaily from "./dashbord-total-daily";

export default function AgentDashboard() {
     return (
          <div className="flex h-full flex-col gap-5 p-5 md:flex-row">
               <div className="flex w-full flex-col gap-5 md:w-3/4">
                    <h2>Agent Dashboard</h2>

                    <div className="flex flex-col flex-wrap gap-5 md:flex-row">
                         <DashboardTotalDaily
                              title={"6 Tyres"}
                              description={"Total amount of Tyres daily"}
                              amount={"#1,800"}
                         />
                         <DashboardTotalDaily
                              title={"8 Tyres"}
                              description={"Total amount of Tyres daily"}
                              amount={"#1,800"}
                         />
                         <DashboardTotalDaily
                              title={"10 Tyres"}
                              description={"Total amount of Tyres daily"}
                              amount={"#1,800"}
                         />
                         <DashboardTotalDaily
                              title={"12 Tyres"}
                              description={"Total amount of Tyres daily"}
                              amount={"#1,800"}
                         />
                         <DashboardTotalDaily
                              title={"16 Tyres"}
                              description={"Total amount of Tyres daily"}
                              amount={"#1,800"}
                         />
                    </div>
               </div>
               <div className="hidden w-full flex-col gap-3 rounded-xl bg-secondary p-3 md:flex md:w-1/4">
                    <h2 className="">Recent Activities</h2>
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

                    <Button>View All</Button>
               </div>
          </div>
     );
}

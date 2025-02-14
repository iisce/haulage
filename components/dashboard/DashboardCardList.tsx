import DashboardTotalCard from "./dashboard-total-card";
import { getAgentCount } from "@/data/agent";
import { getAdminCount } from "@/data/admin";
import { getVehicleCount } from "@/data/vehicles";
import { getCurrentUser } from "@/data/users";

export default async function DashboardCardList() {
     const [agents, admins, vehicles, user] = await Promise.all([
          getAgentCount(),
          getAdminCount(),
          getVehicleCount(),
          getCurrentUser(),
     ]);

     return (
          <div className="flex flex-col gap-5 md:flex-row">
               {user?.role === "SUPER_ADMIN" && (
                    <DashboardTotalCard
                         title={"Admin"}
                         description={"Total number of admins"}
                         amount={admins}
                    />
               )}
               <DashboardTotalCard
                    title={"Agent"}
                    description={"Total number of Agent"}
                    amount={agents}
               />
               <DashboardTotalCard
                    title={"Vehicles"}
                    description={"Total number of Vehicles"}
                    amount={vehicles}
               />
          </div>
     );
}

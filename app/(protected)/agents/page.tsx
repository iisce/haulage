import { AgentTable } from "@/components/agents/agent-table";
import Search from "@/components/shared/search-component";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AgentPage() {
     return (
          <div className="px-[20px]">
               <div className="flex w-full gap-12 pt-[20px]">
                    <Search />
                    <Link href="agents/new-agent">
                         <Button value={`Add Agent`}>Add Agent</Button>
                    </Link>
               </div>
               <AgentTable />
          </div>
     );
}

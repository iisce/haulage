"use client";

import { AGENTTYPE } from "@/components/agents/agent-table";
import UpdateAgentForm from "@/components/forms/update-agent-form";

export default function SingleVehiclePage({
     params,
}: {
     params: { id: string };
}) {
     const AGENTLIST: AGENTTYPE[] = [
          {
               agent_email_address: "",
               agent_name: "",
               agent_phone_number: "",
               id: "",
               lga: "",
               status: "",
               nin: "",
               residential_address: "",
          },
     ];
     const agent = AGENTLIST.find(({ id }) => id === params.id);
     return <div>{<UpdateAgentForm agent={agent} />}</div>;
}

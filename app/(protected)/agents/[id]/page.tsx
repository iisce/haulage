"use client";
import { AGENTLIST } from "@/components/agents/agent-table";
import UpdateAgentForm from "@/components/forms/update-agent-form";
import React from "react";

export default function SingleVehiclePage({
  params,
}: {
  params: { id: string };
}) {
  const agent = AGENTLIST.find(({ id }) => id === params.id);
  return <div>{<UpdateAgentForm agent={agent} />}</div>;
}

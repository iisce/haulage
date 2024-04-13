import CreateAgentForm from "@/components/forms/new-agent-form";
import React from "react";

export default function NewAgent() {
  return (
    <div className="flex flex-col  pt-[20px] w-full">
      <div className="pl-5 py-3 text-lg">AGENT INFORMATION</div>
      <div className=" my-4 mx-4">
        <CreateAgentForm params={{
                  id: ""
              }} />
      </div>
    </div>
  );
}

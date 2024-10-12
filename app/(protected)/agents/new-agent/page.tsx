import CreateAgentForm from "@/components/forms/agent-registration-form";
import React from "react";

export default function NewAgent() {
     return (
          <div className="flex w-full flex-col pt-[20px]">
               <div className="py-3 pl-5 text-lg">AGENT INFORMATION</div>
               <div className="mx-4 my-4">
                    <CreateAgentForm />
               </div>
          </div>
     );
}

import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { axiosWithAuth } from "@/lib/axios.config";
import axios, { AxiosError } from "axios";

export const revalidate = 0;

export const getAgents = async () => {
     const session = await auth();
     try {
          const agentsRequest = await axios.get(
               `${BASE_URL}${URLS.user.agents}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const agents: IAgent[] = agentsRequest.data.data;
          return agents;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return [];
          }
          return [];
     }
};

export const getAgentById = async (options: { id: string }) => {
     const { id } = options;
     try {
          const agentRequest = await axiosWithAuth.get(`/agents/${id}`);

          if (agentRequest.data) {
               const agents: IAgent = agentRequest.data;

               return agents;
          }

          return null;
     } catch (error) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return null;
          }
          console.log(error);
          return null;
     }
};

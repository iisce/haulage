import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import { db } from "@/lib/db";
import { User } from "@prisma/client";
import axios, { AxiosError } from "axios";

export const revalidate = 0;

export const getAgents = async () => {
     const session = await auth();
     try {
          const agentsRequest = await axios.get(
               `${BASE_URL}${URLS.user.agents.all}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const agents: User[] = agentsRequest.data.data;
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
     const session = await auth();
     const { id } = options;
     try {
          const agentRequest = await axios.get(
               `${BASE_URL}${URLS.user.agents.all}/${id}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );

          if (agentRequest.data) {
               const agent: User = agentRequest.data;

               return agent;
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

export const getAgentCount = async () => {
     const session = await auth();
     if (!session) return 0;
     try {
          const agentCount = await db.user.count({
               where: {
                    role: "AGENT",
               },
          });
          return agentCount;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log(error.message);
               return 0;
          }
          return 0;
     }
};

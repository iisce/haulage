import { auth } from "@/auth";
import { BASE_URL, URLS } from "@/constants";
import axios, { AxiosError } from "axios";

export const revalidate = 0;

export const getCodes = async () => {
     const session = await auth();
     try {
          const codesRequest = await axios.get(
               `${BASE_URL}${URLS.user.admins.codes.all}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const codes: ICode[] = codesRequest.data.data;
          console.log({ codes });
          return codes;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error });
               return [];
          }
          return [];
     }
};

export const getVehicleByQRCodes = async (qr: string) => {
     const session = await auth();
     try {
          const vehicleScanRequest = await axios.get(
               `${BASE_URL}${URLS.vehicles.scan}/${qr}`,
               {
                    headers: {
                         Authorization: `Bearer ${session?.user.access_token}`,
                    },
               },
          );
          const vehicleScan: ITransaction[] = vehicleScanRequest.data.data;
          console.log({ vehicleScan });
          return vehicleScan;
     } catch (error: any) {
          if (error instanceof AxiosError) {
               console.log({ error });
               return [];
          }
          return [];
     }
};

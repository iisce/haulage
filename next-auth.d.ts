import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
     access_token: string;
     role: string;
};

declare module "next-auth" {
     interface Session {
          user: ExtendedUser;
          expired?: boolean;
     }
     interface User {
          access_token: string;
          role: string;
     }
}

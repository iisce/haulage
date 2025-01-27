import axios, { AxiosError } from "axios";
import Credentials from "next-auth/providers/credentials";
import { BASE_URL, URLS } from "./constants";
import { LoginSchema } from "./schemas";
import { jwtDecode } from "jwt-decode";

export default {
     providers: [
          Credentials({
               async authorize(credentials) {
                    const validatedFields = LoginSchema.safeParse(credentials);

                    if (validatedFields.success) {
                         const { email, password } = validatedFields.data;
                         try {
                              const loginRequest = await axios.post(
                                   `${BASE_URL}${URLS.auth.login}`,
                                   {
                                        email,
                                        password,
                                   },
                              );
                              if (!loginRequest.data.success) {
                                   return null;
                              }
                              const token = loginRequest.data.jwtToken;
                              if (!token) return null;

                              const decodedUser: any = jwtDecode(token); // Decode the token to get the user info

                              // Return the decoded user info instead of the token

                              return {
                                   access_token: token,
                                   email: decodedUser.email,
                                   name: decodedUser.fullname,
                                   id: decodedUser.id,
                                   role: decodedUser.role,
                              };
                         } catch (error) {
                              if (error instanceof AxiosError) {
                                   const details =
                                        error.response?.data.details[0];
                                   throw new Error(details);
                              }
                              throw new Error("Cannot login");
                         }
                    }

                    throw new Error("Invalid credentials");
               },
          }),
     ],
};

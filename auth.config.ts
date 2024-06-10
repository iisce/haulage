import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { URLS, USER_ADMIN } from './constants';
import { LoginSchema } from './schemas';
import { axiosWithoutAuth } from './lib/axios.config';

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedFields = LoginSchema.safeParse(credentials);

				if (validatedFields.success) {
					const { email, password } = validatedFields.data;
					// TODO: make API request to get user

					try {
						const loginRequest = await axiosWithoutAuth.post(
							URLS.auth.login,
							{
								email,
								password,
							}
						);
						if (!loginRequest.data.success) {
							return null;
						}
						const user = loginRequest.data.data;
						if (!user) return null;
						return user;
					} catch (error) {
						console.log({ error });
						return null;
					}
				}

				return null;
			},
		}),
	],
} satisfies NextAuthConfig;

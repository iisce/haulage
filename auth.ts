import NextAuth from 'next-auth';

import authConfig from './auth.config';
import { ROLES, USER_ADMIN } from '@/constants';

export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
	pages: {
		signIn: '/sign-in',
		error: '/error',
	},
	callbacks: {
		async session({ session, token }) {
			session.user.access_token = token.access_token as string;
			return session;
		},
		async jwt({ token, user, session }) {
			if (user) token.access_token = user.access_token;
			return token;
		},
	},
	session: { strategy: 'jwt', maxAge: 60 * 60 * 30 },
	...authConfig,
});

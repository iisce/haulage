import { UserRole } from '@prisma/client';
import { DefaultSession } from 'next-auth';

export type ExtendedUser = DefaultSession['user'] & { access_token: string };

declare module 'next-auth' {
	interface Session {
		user: ExtendedUser;
	}
	interface User {
		access_token: string;
	}
}

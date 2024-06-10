import NextAuth from 'next-auth';

import authConfig from './auth.config';

import {
	DEFAULT_LOGIN_REDIRECT,
	apiAuthPrefix,
	apiMailPrefix,
	authRoutes,
	publicRoutes,
} from '@/routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const isLoggedIn = !!req.auth;
	const { nextUrl } = req;
	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);

	if (isApiAuthRoute) {
		return;
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(
				new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)
			);
		}

		return;
	}

	if (!isLoggedIn && !isPublicRoute) {
		let callBackUrl = nextUrl.pathname;
		if (nextUrl.search) {
			callBackUrl += nextUrl.search;
		}

		const encodedCallbackUrl = encodeURIComponent(callBackUrl);
		return Response.redirect(
			new URL(`/sign-in?callbackUrl=${encodedCallbackUrl}`, nextUrl)
		);
	}

	return;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
	matcher: [
		'/((?!.*\\..*|_next).*)', // Don't run middleware on static files
		'/', // Run middleware on index page
		'/(api|trpc)(.*)',
	],
};

import NavBar from '@/components/layout/navbar';
import React from 'react';

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<NavBar />
			{children}
		</main>
	);
}

import ProtectedMobileNavBar from '@/components/layout/protected-mobile-navbar';
import ProtectedSideBar from '@/components/layout/protected-side-bar';
import React from 'react';

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
			<ProtectedSideBar />
			<div className='flex flex-col'>
				<ProtectedMobileNavBar />
				{children}
			</div>
		</div>
	);
}

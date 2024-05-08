import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { Bell } from 'lucide-react';
import { DASHBOARD_NAV_ITEMS } from '@/constants';
import ProtectedNavLink from './nav-link-protected';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '../ui/card';

export default function ProtectedSideBar() {
	return (
		<div className='hidden border-r bg-muted/40 md:block'>
			<div className='flex h-full max-h-screen flex-col gap-2'>
				<div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
					<Link
						href={'/'}
						className='flex items-center gap-2 font-bold shrink-0 px-5'
					>
						<Image
							src={
								'https://transpay.vercel.app/anambara.png?w=48&q=75'
							}
							height={40}
							width={40}
							className='shrink-0  h-10 w-10'
							alt='Transpay Logo'
						/>
						<span className=''>Haulage</span>
					</Link>
					<Button
						variant='outline'
						size='icon'
						className='ml-auto h-8 w-8'
					>
						<Bell className='h-4 w-4' />
						<span className='sr-only'>
							Toggle notifications
						</span>
					</Button>
				</div>
				<div className='flex-1'>
					<nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
						{DASHBOARD_NAV_ITEMS.map(
							({ href, title, icon }, key) => (
								<ProtectedNavLink
									key={key}
									href={href}
									title={title}
									icon={icon}
									className='transition-colors'
								/>
							)
						)}
					</nav>
				</div>
				{/* <div className='mt-auto p-4'>
					
				</div> */}
			</div>
		</div>
	);
}

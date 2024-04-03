import { DASHBOARD_NAV_ITEMS } from '@/constants';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import ProtectedNavLink from './nav-link-protected';
import UserMenu from './user-menu';
import DashboardBreadcrumb from './dashboard-breadcrumb';

export default function ProtectedMobileNavBar() {
	return (
		<header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant='outline'
						size='icon'
						className='shrink-0 md:hidden'
					>
						<Menu className='h-5 w-5' />
						<span className='sr-only'>
							Toggle navigation menu
						</span>
					</Button>
				</SheetTrigger>
				<SheetContent
					side='left'
					className='flex flex-col'
				>
					<nav className='grid gap-2 text-lg font-medium'>
						<Link
							href={'/'}
							className='flex items-center gap-2 font-bold shrink-0 px-5'
						>
							<Image
								src={
									'https://transpay.vercel.app/anambara.png'
								}
								height={40}
								width={40}
								className='shrink-0 h-10 w-10'
								alt='Transpay Logo'
							/>
							<span className='sr-only'>Haulage</span>
						</Link>
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
					<div className='mt-auto'>
						<Card>
							<CardHeader>
								<CardTitle>Upgrade to Pro</CardTitle>
								<CardDescription>
									Unlock all features and get
									unlimited access to our support
									team.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									size='sm'
									className='w-full'
								>
									Upgrade
								</Button>
							</CardContent>
						</Card>
					</div>
				</SheetContent>
			</Sheet>
			<div className='w-full flex-1'>
				<DashboardBreadcrumb />
			</div>
			<UserMenu />
		</header>
	);
}

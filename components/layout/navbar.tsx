import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DASHBOARD_NAV_ITEMS, HOME_NAV_ITEMS } from '@/constants';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './nav-link';
import UserMenu from './user-menu';
import { cn } from '@/lib/utils';

export default function NavBar() {
	return (
		<header className='fixed top-0 flex h-16 items-center justify-between gap-4 border-b backdrop-blur px-4 md:px-6 w-full z-50 bg-transparent'>
			<nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
				<Link
					href={'#'}
					className='flex items-center font-bold shrink-0 px-5'
				>
					<Image
						src={'https://transpay.vercel.app/anambara.png'}
						height={40}
						width={40}
						className='shrink-0 h-10 w-10'
						alt='Transpay Logo'
					/>
					<span className='sr-only'>Haulage</span>
				</Link>
				{HOME_NAV_ITEMS.map(({ href, title }, key) => (
					<NavLink
						key={key}
						href={href}
						title={title}
						className='transition-colors'
					/>
				))}
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant='outline'
						size='icon'
						className='shrink-0 md:hidden h-10 w-10'
					>
						<Menu className='h-5 w-5' />
						<span className='sr-only'>
							Toggle navigation menu
						</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left'>
					<nav className='grid gap-6 text-lg font-medium'>
						<Link
							href={'#'}
							className='flex items-center font-bold shrink-0 px-5'
						>
							<Image
								src={
									'https://transpay.vercel.app/anambara.png'
								}
								height={40}
								width={40}
								className='shrink-0'
								alt='Transpay Logo'
							/>
							<span className='sr-only'>Haulage</span>
						</Link>
						{DASHBOARD_NAV_ITEMS.map(
							({ href, title }, key) => (
								<NavLink
									key={key}
									href={href}
									title={title}
								/>
							)
						)}
					</nav>
				</SheetContent>
			</Sheet>
			<div className='flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
				<Link
					className={cn(buttonVariants())}
					href='/dashboard'
				>
					Dashboard
				</Link>
				<UserMenu />
			</div>
		</header>
	);
}

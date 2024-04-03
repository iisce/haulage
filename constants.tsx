import {
	ActivityIcon,
	BarChart,
	Currency,
	Home,
	ScanBarcode,
	Settings,
	Truck,
	User,
	Users,
	Users2,
} from 'lucide-react';

export const ROLES = ['SUPERADMIN', 'ADMIN', 'AGENT', 'USER'] as const;

export const DASHBOARD_NAV_ITEMS = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		icon: <Home className='h-4 w-4' />,
	},
	{
		title: 'Activities',
		href: '/activities',
		icon: <ActivityIcon className='h-4 w-4' />,
	},
	{ title: 'Admins', href: '/admins', icon: <Users className='h-4 w-4' /> },
	{ title: 'Agents', href: '/agents', icon: <Users2 className='h-4 w-4' /> },
	{
		title: 'Revenue',
		href: '/revenue',
		icon: <BarChart className='h-4 w-4' />,
	},
	{
		title: 'Scan',
		href: '/scan',
		icon: <ScanBarcode className='h-4 w-4' />,
	},
	{
		title: 'Settings',
		href: '/settings',
		icon: <Settings className='h-4 w-4' />,
	},
	{
		title: 'Transactions',
		href: '/transactions',
		icon: <Currency className='h-4 w-4' />,
	},
	{
		title: 'Vehicles',
		href: '/vehicles',
		icon: <Truck className='h-4 w-4' />,
	},
] as const;

export const HOME_NAV_ITEMS = [
	{
		title: 'Home',
		href: '/',
	},
] as const;

export const SESSION: boolean = true;

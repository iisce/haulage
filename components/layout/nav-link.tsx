'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLink({
	href,
	className,
	title,
}: {
	href: string;
	className?: string;
	title: string;
}) {
	const pathName = usePathname();
	const active = pathName.startsWith(href);
	return (
		<Link
			href={href}
			className={cn(
				`${
					active ? 'text-foreground' : 'text-muted-foreground'
				} hover:text-foreground`,
				className
			)}
		>
			{title}
		</Link>
	);
}

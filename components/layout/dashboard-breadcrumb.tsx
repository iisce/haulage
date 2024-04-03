'use client';
import { createBreadcrumbDataFromUrl } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '../ui/breadcrumb';

export default function DashboardBreadcrumb() {
	const pathname = usePathname();
	const breadcrumbData = createBreadcrumbDataFromUrl(pathname);
	return (
		<Breadcrumb className='hidden md:flex'>
			<BreadcrumbList>
				{breadcrumbData.map((item, index) => (
					<React.Fragment key={index}>
						<BreadcrumbItem>
							{!item.isCurrentPage ? (
								<BreadcrumbLink asChild>
									<Link href={item.href}>
										{item.label}
									</Link>
								</BreadcrumbLink>
							) : (
								<BreadcrumbPage>
									{item.label}
								</BreadcrumbPage>
							)}
						</BreadcrumbItem>
						{index < breadcrumbData.length - 1 && (
							<BreadcrumbSeparator />
						)}
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}

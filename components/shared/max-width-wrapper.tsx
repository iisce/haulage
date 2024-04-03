import { cn } from '@/lib/utils';
import React from 'react';

export default function MaxWidthWrapper({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<div className={cn('mx-auto max-w-7xl px-3 md:px-5', className)}>
			{children}
		</div>
	);
}

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function BackButton({
	label,
	href,
}: {
	label?: string;
	href: string;
}) {
	return (
		<Button
			size='sm'
			variant='link'
			className='w-full font-normal'
			asChild
		>
			<Link href={href}>{label}</Link>
		</Button>
	);
}

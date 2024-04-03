import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function SummaryPage() {
	return (
		<MaxWidthWrapper className='flex flex-col border-x min-h-[100svh]'>
			Summary Page
			<Button asChild>
				<Link href='/'>Go Home</Link>
			</Button>
		</MaxWidthWrapper>
	);
}

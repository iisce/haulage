import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header({ label }: { label: string }) {
	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<div>
				<Link href={'/'}>
					<Image
						src='https://transpay.vercel.app/anambara.png'
						alt='Haulage Logo'
						height={60}
						width={60}
						className='h-14 w-14 dark:invert'
					/>
				</Link>
			</div>
			<h1 className='text-3xl font-semibold'>Haulage</h1>
			<p className='text-muted-foreground text-sm'>{label}</p>
		</div>
	);
}

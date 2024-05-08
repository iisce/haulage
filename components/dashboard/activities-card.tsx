import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';
import { User } from 'lucide-react';

export default function ActivitiesCard({
	title,
	description,
	Date,
	icons,
}: {
	title: string;
	description: string;
	Date: string;
	icons: React.ReactNode;
}) {
	return (
		<Card className='w-full'>
			<CardHeader className='px-6 space-y-1'>
				<CardTitle className='text-[20px] font-bold '>{title}</CardTitle>
				<CardDescription className='text-[14px]' >{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<h5 className='grid text-[14px]  w-full items-center gap-4'>{Date}</h5>
			</CardContent>
		</Card>
	);
}

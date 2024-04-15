import { AgentTable } from '@/components/agents/agent-table';
import React from 'react';
import Link from 'next/link';
import Search from '@/components/shared/search-component';
import { Button } from '@/components/ui/button';

export default function AgentPage({ params }: { params: { id: string } }) {
	return (
		<div className='px-[20px]'>
			<div className='flex gap-12 pt-[20px] w-full'>
				<Search />
				<Link href='agents/new-agent'>
					<Button value={`Add Agent`}>Add Agent</Button>
				</Link>
			</div>
			<AgentTable />
		</div>
	);
}

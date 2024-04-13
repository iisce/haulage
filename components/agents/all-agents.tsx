import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import Search from '../shared/search-component'
import { AgentTable } from './agent-table'

export const All_agents = () => {
  return (
    <>
    <div className='px-[20px]'>
        <div className="flex gap-12 pt-[20px] w-full ">
            <Search />
            <Button value={`Add Agent`}>Add Agent</Button>
        </div>
        <AgentTable />
    </div>
    </>
  )
}

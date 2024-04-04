import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import Search from '../shared/search-component'

export const All_agents = () => {
  return (
    <>
    <div>
        <div className="flex gap-12 px-[20px] pt-[20px] w-full ">
            <Search />
            <Button value={`Add Agent`}>Add Agent</Button>
        </div>
    </div>
    </>
  )
}

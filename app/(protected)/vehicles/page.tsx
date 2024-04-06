import Search from '@/components/shared/search-component'
import { Button } from '@/components/ui/button'
import TableDemo from '@/components/vehicles/ui-table'
import Link from 'next/link'
import React from 'react'

export default function VehiclePage() {
  return (
	<div className="flex flex-col  pt-[20px] w-full">
		<div className="flex gap-12 px-[20px] flex-row">
		<Search />
		<Link href='/vehicles/new-vehicles'>
        <Button >Add Vehicle</Button>
		</Link>
		</div>  
		<div className=' my-4 mx-4'><TableDemo/></div>
      </div>
    
  )
}

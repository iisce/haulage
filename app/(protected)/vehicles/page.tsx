import Search from '@/components/shared/search-component'
import { Button } from '@/components/ui/button'
import { VehicleTable } from '@/components/vehicles/vehicleTable'
import Link from 'next/link'

export default function VehiclePage({ params }: {params : {id: string};
}) {
  return (
	<div className="flex flex-col  pt-[20px] w-full">
		<div className="flex gap-12 px-[20px] flex-row">
		<Search />
		<Link href='/vehicles/new-vehicles'>
        <Button >Add Vehicle</Button>
		</Link>
		</div>  
		<div className=' my-4 mx-4'><VehicleTable id={params.id}/></div>
      </div>
    
  )
}

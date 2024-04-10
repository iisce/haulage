import CreateVehicleForm from '@/components/forms/newVehicleForm'
import Search from '@/components/shared/search-component'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

export default function NewVehiclesPage() {
	return (
	<div className="flex flex-col  pt-[20px] w-full">		
		<div className="pl-5 py-3 text-lg">VEHICLE INFORMATION</div>
		<div className=' my-4 mx-4'>
      <CreateVehicleForm/>
	  </div>
	</div>

	)
}

// name
// phone no
// address(street, lga)
// email
// NIN

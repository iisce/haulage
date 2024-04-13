import CreateVehicleForm from '@/components/forms/newVehicleForm'

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


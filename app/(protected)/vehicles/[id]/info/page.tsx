// import { UpdateVehicleForm } from '@/components/forms/updateVehicleForm';
// import { getVehicleById } from '@/lib/controllers/vehicle-controller';
// import { PlusIcon } from 'lucide-react';
// import { notFound } from 'next/navigation';

// export default async function VehicleInformationPage({
// 	params,
// }: {
// 	params: { id: string };
// }) {
// 	const vehicle = await getVehicleById(params.id);
// 	if (!vehicle) {
// 		notFound();
// 	}
// 	return (
// 		<>
// 			<div className='w-full flex flex-col gap-3 mb-8 p-2 xs:p-5  '>
// 				<div className=''>
// 					<h1 className='font-bold py-2'>
// 						Vehicle Owner: Mr. {vehicle.owners_name}
// 					</h1>
// 				</div>

// 				{/* Vehicle Plate Information */}
// 				<div className='h-12 shrink-0 bg-primary w-full rounded-2xl flex overflow-hidden text-white items-center'>
// 					<div className='h-12 w-12 bg-black p-3'><PlusIcon/></div>
// 					<div className='p-3'>Vehicle Information</div>
// 				</div>

// 				<div>
// 					<UpdateVehicleForm vehicle={vehicle} />
// 				</div>
// 			</div>
// 		</>
// 	);
// }

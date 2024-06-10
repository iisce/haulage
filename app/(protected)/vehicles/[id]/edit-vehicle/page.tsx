import UpdateVehicleForm from '@/components/forms/updateVehicleForm';
import { VEHICLE_DETAILS } from '@/constants';
import React from 'react';

export default function EditSingleVehiclePage({
	params,
}: {
	params: { id: string };
}) {
	const vehicle = VEHICLE_DETAILS.find(({ id }) => id === params.id);

	console.log({ vehicle });

	return (
		<div>
			<UpdateVehicleForm vehicle={vehicle} />
		</div>
	);
}

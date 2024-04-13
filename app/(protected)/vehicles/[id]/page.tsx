'use client'
import UpdateVehicleForm from '@/components/forms/updateVehicleForm';
import { VEHICLE_DETAILS } from '@/components/vehicles/vehicleTable';
import React from 'react';

export default function SingleVehiclePage({ params }: {params: { id: string }; }) {

	const vehicle = VEHICLE_DETAILS.find(({id} )=> id === params.id);
	
	
	return <div>
		<UpdateVehicleForm vehicle={vehicle}/>
	</div>
}

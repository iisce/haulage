import VehiclesActivities from '@/components/vehicles/vehiclesActivities'
import React from 'react'

export default function VehicleActivityPage({ params }: {params : {id: string};
}) {
  return (
    <div><VehiclesActivities id={params.id}   /></div>
  )
}

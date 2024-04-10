import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import Link from 'next/link';

export default function VehiclesActivities({id}:{id: string}) {

const VEHICLE_ACTIVITY: {
        date: string;
        title: string;
        description: string;
        link: string;
    }[] = [
        {
            date: 'April 3 2024',
            title: 'Searched Vehicle',
            description: 'vehicle_id: 865ca53a-ca49-4159-b03f-b65342521b30 - 1702979976310 was searched using a barcode',
            link: `/vehicles/${id}/activities/details`
        },
        {
            date: 'April 4 2024',
            title: 'Searched Vehicle',
            description: 'vehicle_id: 865ca53a-ca49-4159-b03f-b65342521b30 - 1702979976310 was searched using a barcode',
            link: `/vehicles/${id}/activities/details`
        },
        {
            date: 'April 5 2024',
            title: 'Searched Vehicle',
            description: 'vehicle_id: 865ca53a-ca49-4159-b03f-b65342521b30 - 1702979976310 was searched using a barcode',
            link: `/vehicles/${id}/activities/details`
        },
        {
            date: 'April 6 2024',
            title: 'Searched Vehicle',
            description: 'vehicle_id: 865ca53a-ca49-4159-b03f-b65342521b30 - 1702979976310 was searched using a barcode',
            link: `/vehicles/${id}/activities/details`
        },
        {
            date: 'April 7 2024',
            title: 'Searched Vehicle',
            description: 'vehicle_id: 865ca53a-ca49-4159-b03f-b65342521b30 - 1702979976310 was searched using a barcode',
            link: `/vehicles/${id}/activities/details`
        },
       
    ]
  return (
    <div>
        {VEHICLE_ACTIVITY.map((singleActivity, i) => (
            <Accordion type="single" collapsible className="w-full m-5 px-4 mx-auto" key={i}>
                 <AccordionItem value='item-0'>
                 <AccordionTrigger>{singleActivity.date}</AccordionTrigger>
                 <AccordionContent className='px-3'>
                    <h3>{singleActivity.title}</h3>
                    <p>{singleActivity.description}</p>
                    <div className="flex flex-row justify-between">
                    <p>{singleActivity.title}</p>
                        <Link href={singleActivity.link}>View Detail</Link>
                    </div>
                 </AccordionContent>
                 </AccordionItem>
            </Accordion>
        ))}
    </div>
  )
}

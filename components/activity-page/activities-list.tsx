import React from 'react'
import { Button } from '../ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";

export default function ActivityList() {
  return (
    
        <>
          <Accordion type="single" collapsible className="w-full m-5 px-4 mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>April 3 2024</AccordionTrigger>
            <AccordionContent className='px-3'>
               <div>Search Vehicle</div>
               <div>vehicle_id: 865ca53a-ca49-4159-b03f-b65342521b30 - 1702979976310 was searched using a barcode</div>
               <div className='flex justify-between '>
                  <p>Search Vehicle</p>
                  <Link
											href='/activities/details'
											className=''
										>
											View Detail
										</Link>

               </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>April 4 2024</AccordionTrigger>
            <AccordionContent className='px-3'>
               <div>Search Vehicle</div>
               <div>vehicle_id: 865ca53a-ca49-4159-b03f-b65342521b30 - 1702979976310 was searched using a barcode</div>
               <div className='flex justify-between '>
                  <p>Search Vehicle</p>
                  <Link
											href='/activities/details'
											className=''
										>
											View Detail
										</Link>

               </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>April 5 2024</AccordionTrigger>
            <AccordionContent className='px-3'>
               <div>Search Vehicle</div>
               <div>vehicle_id: 865ca53a-ca49-4159-b03f-b65342521b30 - 1702979976310 was searched using a barcode</div>
               <div className='flex justify-between '>
                  <p>Search Vehicle</p>
                  <Link
											href='/activities/details'
											className=''
										>
											View Detail
										</Link>

               </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>April 6 2024</AccordionTrigger>
            <AccordionContent className='px-3'>
               <div>Search Vehicle</div>
               <div>vehicle_id: 865ca53a-ca49-4159-b03f-b65342521b30 - 1702979976310 was searched using a barcode</div>
               <div className='flex justify-between '>
                  <p>Search Vehicle</p>
                  <Link
											href='/activities/details'
											className=''
										>
											View Detail
										</Link>

               </div>
            </AccordionContent>
          </AccordionItem>
          </Accordion>
        </>
          
    
  )
}

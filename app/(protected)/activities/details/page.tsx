import { Button } from '@/components/ui/button'
import Link from "next/link";
export default function DetailPage() {
    return (
            <div className='mx-auto px-2 py-2 mt-5 grid gap-3'>
                <p className='text-center text-[20px] mb-5 '>Activity Search Vehicle</p>
                <div className='grid gap-1 text-[15px]'>
                    <div> Activity: search-vehicle </div>
                    <div> Activity ID: cea33c31-09e3-4ca6-9b97-c76a1a9465ad</div>
                    <div> Activity Description: vehicle_id: 865ca53a-ca49-4159-b03f-b65342521b30 - 1702979976310 was searched using a barcode</div>
                    <div> Activity Date: 4/3/2024</div>
                    <div> Activity Time: 10:06:48 AM</div>
                <div/>
            </div>
                <Link
					href='/activities'
                   
			    >
				    < Button  className='w-full'> Back to Activities </Button>						
				</Link>
                
            </div>
           
         
      
    )
  }
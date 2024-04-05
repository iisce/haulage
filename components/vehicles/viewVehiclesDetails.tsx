// import DashboardCard from '@/components/layout/dashboard-card';
// import { Button, buttonVariants } from '@/components/ui/button';
// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { driversColumns, paymentColumns } from '@/components/ui/table/columns';
// import { DataTable } from '@/components/ui/table/data-table';
// import { getVehicleById } from '@/lib/controllers/vehicle-controller';
// import { getSSession } from '@/lib/get-data';
// import { cn } from '@/lib/utils';
// import { addDays, format, isBefore } from 'date-fns';
// import { MapPin } from 'lucide-react';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';

// export default async function ViewVehicleDetails({ id }: { id: string }) {
// 	const { role } = await getSSession();
// 	const vehicle = await getVehicleById(id);
// 	if (!vehicle) return notFound();

// 	const isOwing = isBefore(
// 		addDays(new Date(vehicle.VehicleBalance.next_transaction_date), 1),
// 		new Date()
// 	);
// 	return (
// 		<div className='h-full w-full py-6 flex flex-col gap-6 '>
// 			<div className='flex items-center justify-between'>
// 				<div className='text-title1Bold'>
// 					Vehicle Owner: Mr. {vehicle.owners_name}
// 				</div>
// 				<div className='flex gap-2 items-center justify-center'>
// 					{vehicle.tracker_id && vehicle.tracker_id !== '' && (
// 						<Button
// 							className='justify-start  text-white rounded-xl bg-primary-800'
// 							asChild
// 							variant={'default'}
// 						>
// 							<Link
// 								href={`/vehicles/${id}/location`}
// 								className='shrink-0 whitespace-nowrap'
// 							>
// 								<MapPin className='mr-2 h-4 w-4 shrink-0' />
// 								View live location
// 							</Link>
// 						</Button>
// 					)}
// 					<Link
// 						href={`/vehicles/${id}/new-driver`}
// 						className={cn(buttonVariants())}
// 					>
// 						Add Driver
// 					</Link>
// 				</div>
// 			</div>
// 			<Card className=' max-w-lg'>
// 				<CardHeader className='border-b text-awesome-foreground text-xl py-1'>
// 					<div className='grid grid-cols-2'>
// 						<div className=''>Wallet Balance:</div>
// 						<div className='text-end'>
// 							₦
// 							{vehicle.VehicleBalance.wallet_balance.toFixed(
// 								2
// 							)}
// 						</div>
// 					</div>
// 				</CardHeader>
// 				<CardContent className='grid gap-1 py-2 text-lg'>
// 					<div className='grid grid-cols-2'>
// 						<div className=''>Total Levy Paid:</div>
// 						<div className='text-end'>
// 							₦
// 							{vehicle.VehicleBalance.net_total.toFixed(2)}
// 						</div>
// 					</div>
// 					<div
// 						className={`grid grid-cols-2 ${
// 							isOwing ? 'text-red-500' : ''
// 						}`}
// 					>
// 						<div className=''>Next Payment Date:</div>
// 						<div className='text-end'>
// 							{format(
// 								new Date(
// 									vehicle.VehicleBalance.next_transaction_date
// 								),
// 								'MMMM d, yyyy'
// 							)}
// 						</div>
// 					</div>
					
// 				</CardContent>
// 			</Card>
			
// 			<div className=' w-full'>
// 				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full'>
// 					{role && (
// 						<>
// 							<DashboardCard
// 								name='Vehicle Information'
// 								href={`${id}/vehicle-info`}
// 								image={'/personalinfo.png'}
// 								description={'View Vehicle information'}
// 							/>

							
// 							{role?.toLowerCase() !== 'agent' && (
// 								<>
// 									<DashboardCard
// 										name='Payment'
// 										href={`${id}/payments`}
// 										image={'/payment.png'}
// 										description={
// 											'Make Payment & Check Payment History'
// 										}
// 									/>

								
// 								</>
// 							)}
// 							<DashboardCard
// 								name='Waiver Form'
// 								href={`${id}/waiver`}
// 								image={'/fineandpenal.png'}
// 								description='Fill waiver form to process driver grace period'
// 							/>
// 						</>
// 					)}
// 				</div>
// 				{role && (
// 					<div className='flex flex-col gap-5'>
// 						{role?.toLowerCase() !== 'agent' && (
// 							<>
								
// 								<div className='flex flex-col gap-2 '>
// 									<div className='flex justify-between py-2'>
// 										<div className='shrink-0 grow-0 text-title1Bold'>
// 											Payment History
// 										</div>
// 										<div className='shrink-0 grow-0 text-title1Bold'>
// 											<Button
// 												asChild
// 												variant='link'
// 											>
// 												<Link
// 													href={`/vehicles/${id}/payments`}
// 												>
// 													See all
// 												</Link>
// 											</Button>
// 										</div>
// 									</div>
// 									<div className=''>
// 										<DataTable
// 											columns={paymentColumns}
// 											data={vehicle.VehicleTransactions.slice(
// 												0,
// 												3
// 											)}
// 										/>
// 									</div>
// 								</div>
// 							</>
// 						)}

						
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

// 'use client';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';
// import { useToast } from '../ui/use-toast';
// import {
// 	Form,
// 	FormControl,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from '../ui/form';
// import { Input } from '../ui/input';
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from '../ui/select';
// import { Button } from '../ui/button';
// import React from 'react';
// import { NextResponse } from 'next/server';

// const vehicleFormSchema = z.object({
// 	category: z
// 		.string({
// 			required_error: 'Please enter a valid Category.',
// 		})
// 		.refine(
// 			(value) =>
// 				['keke', 'small_shuttle', 'big_shuttle'].includes(value),
// 			{
// 				message: 'Invalid means of identification.',
// 			}
// 		),
// 	vehicle_type: z.string({
// 		required_error: 'Please enter a valid vehicle type.',
// 	}),
// 	color: z.string(),
// 	image: z
// 		.string({
// 			required_error: 'Please add image.',
// 		})
// 		.min(5, { message: 'Must be a valid Image link' }),
// 	plate_number: z
// 		.string({
// 			required_error: 'Enter your plate number.',
// 		})
// 		.min(5, {
// 			message: 'Plate numbers have at least five(5) characters.',
// 		}),
// 	owners_phone_number: z
// 		.string({
// 			required_error: 'Enter owner phone number.',
// 		})
// 		.regex(/^\+234[789][01]\d{8}$/, 'Phone format (+2348012345678)'),
// 	owners_name: z
// 		.string({
// 			required_error: 'Enter owner phone number.',
// 		})
// 		.min(5, {
// 			message: 'Plate numbers have at least five(5) characters.',
// 		}),
// 	vin: z.string(),
// 	status: z.string({
// 		required_error: 'Choose Status',
// 	}),
// 	barcode_string: z.string(),
// 	tracker_id: z.string(),
// 	with_wallet: z.boolean(),
// });

// type VehicleFormValues = z.infer<typeof vehicleFormSchema>;

// export function UpdateVehicleForm({ vehicle }: { vehicle: '' }) {
// 	const [disabled, setDisabled] = React.useState<boolean>(true);
// 	// const defaultValues: Partial<VehicleFormValues> = {
// 	// 	category: vehicle.category,
// 	// 	color: vehicle.color,
// 	// 	image: vehicle.image,
// 	// 	plate_number: vehicle.plate_number,
// 	// 	status: vehicle.status,
// 	// 	vehicle_type: vehicle.vehicle_type,
// 	// 	vin: vehicle.vin,
// 	// 	barcode_string: vehicle.barcode_string,
// 	// 	tracker_id: vehicle.tracker_id ? vehicle.tracker_id : '',
// 	// 	owners_phone_number: vehicle.owners_phone_number,
// 	// 	owners_name: vehicle.owners_name,
// 	// 	with_wallet: true,
// 	// };
// 	const [isLoading, setIsLoading] = React.useState<boolean>(false);
// 	const { toast } = useToast();
// 	const form = useForm<VehicleFormValues>({
// 		resolver: zodResolver(vehicleFormSchema),
// 		// defaultValues,
// 		mode: 'onChange',
// 	});

// 	async function onSubmit(data: VehicleFormValues) {
// 		setIsLoading(true);
// 		try {
// 			const createVehicleResponse = await fetch(
// 				'/api/create-vehicle',
// 				{
// 					method: 'PUT',
// 					body: JSON.stringify({
// 						category: data.category,
// 						color: data.color,
// 						image: data.image,
// 						plate_number: data.plate_number,
// 						status: data.status,
// 						vehicle_type: data.vehicle_type,
// 						vin: data.vin,
// 						barcode_string: data.barcode_string,
// 						tracker_id: data.tracker_id,
// 						owners_phone_number: data.owners_phone_number,
// 						owners_name: data.owners_name,
// 						with_wallet: data.with_wallet,
// 						// vehicle_id: vehicle.vehicle_id,
// 					}),
// 				}
// 			);
// 			const result = await createVehicleResponse.json();
// 			if (createVehicleResponse.ok) {
// 				toast({
// 					title: 'Vehicle Updated Successfully',
// 				});
// 				setIsLoading(false);
// 				setDisabled(true);
// 				return NextResponse.json(result);
// 			} else {
// 				setIsLoading(false);
// 				toast({
// 					title: 'Vehicle NOT Created',
// 				});
// 				return null;
// 			}
// 		} catch (error) {
// 			setIsLoading(false);
// 		}
// 	}

// 	return (
// 		<div className='mb-20'>
// 			<Form {...form}>
// 				<form
// 					onSubmit={form.handleSubmit(onSubmit)}
// 					className='flex flex-col gap-5 w-full'
// 				>
// 					<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
// 						<FormField
// 							name='category'
// 							control={form.control}
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel className='text-title1Bold pl-4'>
// 										Vehicle Category
// 									</FormLabel>

// 									<Select
// 										disabled={disabled}
// 										onValueChange={field.onChange}
// 										defaultValue={field.value}
// 									>
// 										<FormControl>
// 											<SelectTrigger className='relative text-body flex  items-center h-14 rounded-2xl'>
// 												<SelectValue placeholder='Select a vehicle category' />
// 											</SelectTrigger>
// 										</FormControl>
// 										<SelectContent>
// 											<SelectItem value='keke'>
// 												Keke
// 											</SelectItem>
// 											<SelectItem value='small_shuttle'>
// 												Small Shuttle
// 											</SelectItem>
// 											<SelectItem value='big_shuttle'>
// 												Big Shuttle
// 											</SelectItem>
// 										</SelectContent>
// 									</Select>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>

// 						<FormField
// 							name='color'
// 							control={form.control}
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel className='text-title1Bold pl-4'>
// 										Color
// 									</FormLabel>

// 									<FormControl>
// 										<Input
// 											disabled={disabled}
// 											className='relative text-body flex  items-center h-14 rounded-2xl'
// 											{...field}
// 											type='text'
// 											placeholder='Enter vehicle color'
// 										/>
// 									</FormControl>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>

// 						<FormField
// 							name='vehicle_type'
// 							control={form.control}
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel className='text-title1Bold pl-4'>
// 										Vehicle Type
// 									</FormLabel>

// 									<FormControl>
// 										<Input
// 											disabled={disabled}
// 											className='relative text-body flex  items-center h-14 rounded-2xl'
// 											{...field}
// 											type='text'
// 											placeholder='Enter vehicle type'
// 										/>
// 									</FormControl>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>

// 						<FormField
// 							name='plate_number'
// 							control={form.control}
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel className='text-title1Bold pl-4'>
// 										Plate Number
// 									</FormLabel>

// 									<FormControl>
// 										<Input
// 											disabled={disabled}
// 											className='relative text-body flex  items-center h-14 rounded-2xl'
// 											{...field}
// 											type='text'
// 											placeholder='Plate Number'
// 										/>
// 									</FormControl>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>

// 						<FormField
// 							name='vin'
// 							control={form.control}
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel className='text-title1Bold pl-4'>
// 										VIN
// 									</FormLabel>

// 									<FormControl>
// 										<Input
// 											disabled={disabled}
// 											className='relative text-body flex  items-center h-14 rounded-2xl'
// 											{...field}
// 											type='text'
// 											placeholder='Enter VIN'
// 										/>
// 									</FormControl>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>

// 						<FormField
// 							name='owners_name'
// 							control={form.control}
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel className='text-title1Bold pl-4'>
// 										{`Owner's Name`}
// 									</FormLabel>

// 									<FormControl>
// 										<Input
// 											disabled={disabled}
// 											className='relative text-body flex  items-center h-14 rounded-2xl'
// 											{...field}
// 											type='text'
// 											placeholder={`Enter owner's name`}
// 										/>
// 									</FormControl>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>

// 						<FormField
// 							name='owners_phone_number'
// 							control={form.control}
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel className='text-title1Bold pl-4'>
// 										{`Owner's Phone Number`}
// 									</FormLabel>

// 									<FormControl>
// 										<Input
// 											disabled={disabled}
// 											className='relative text-body flex  items-center h-14 rounded-2xl'
// 											{...field}
// 											type='text'
// 											placeholder={`Enter owner's phone number`}
// 										/>
// 									</FormControl>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>
// 						<FormField
// 							name='barcode_string'
// 							control={form.control}
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel className='text-title1Bold pl-4'>
// 										Sticker Number
// 									</FormLabel>

// 									<FormControl>
// 										<Input
// 											disabled={disabled}
// 											className='relative text-body flex  items-center h-14 rounded-2xl'
// 											{...field}
// 											type='text'
// 											placeholder='T-01'
// 										/>
// 									</FormControl>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>
// 						<FormField
// 							name='tracker_id'
// 							control={form.control}
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel className='text-title1Bold pl-4'>
// 										Tracker ID
// 									</FormLabel>

// 									<FormControl>
// 										<Input
// 											disabled={disabled}
// 											className='relative text-body flex  items-center h-14 rounded-2xl'
// 											{...field}
// 											type='text'
// 											placeholder='Enter tracker ID'
// 										/>
// 									</FormControl>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>
// 					</div>
// 					<div className=''>
// 						{!disabled && (
// 							<Button
// 								className='w-32'
// 								type='submit'
// 							>
// 								{
// 									'Save Changes'}
// 							</Button>
// 						)}
// 					</div>
// 				</form>
// 			</Form>
// 			{disabled && (
// 				<div className='flex items-center justify-between gap-5'>
// 					<Button
// 						className='w-32'
// 						onClick={() => setDisabled(false)}
// 						type='button'
// 					>
// 						Edit
// 					</Button>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

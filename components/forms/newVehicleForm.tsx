'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { NextResponse } from 'next/server';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../components/ui/button';
import { Dialog, DialogContent } from '../../components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../components/ui/select';
import { useToast } from '../../components/ui/use-toast';

const vehicleFormSchema = z.object({
	category: z
		.string({
			required_error: 'Please enter a valid Category.',
		})
		.refine(
			(value) =>
				['detchable', 'non-detchable',].includes(value),
			{
				message: 'Invalid means of identification.',
			}
		),
	vehicle_type: z.string({
		required_error: 'Please enter a valid vehicle type.',
	})
	.refine((value) => ['8', '12', '14', '16', '18', '24',].includes(value),
	{
		message: 'Invalid means of identification.',
	}
	),
	price_by_tyre: z.string({
		required_error: 'Please enter a valid vehicle type.',
	})
	.refine((value) => ['8000', '12,000', '14,000', '16,000', '18,000', '24,000',].includes(value),
	{
		message: 'Invalid means of identification.',
	}
	),
	
	image: z
		.string({
			required_error: 'Please add image.',
		})
		.min(5, { message: 'Must be a valid Image link' }),
	plate_number: z
		.string({
			required_error: 'Enter your plate number.',
		})
		.min(5, {
			message: 'Plate numbers have at least five(5) characters.',
		}),
	owners_phone_number: z
		.string({
			required_error: 'Enter owner phone number.',
		})
		.regex(/^\+234[789][01]\d{8}$/, 'Phone format (+2348012345678)'),
	owners_name: z
		.string({
			required_error: 'Enter owner phone number.',
		})
		.min(5, {
			message: 'Enter full name',
		}),
	nin: z.string(),
});

type vehicleFormValues = z.infer<typeof vehicleFormSchema>;

const defaultValues: Partial<vehicleFormValues> = {
	price_by_tyre: '',
	plate_number: '',
	vehicle_type: '',
	nin: '',
	owners_phone_number: '',
	owners_name: '',
};

export default function CreateVehicleForm() {
	const [newVehicleId, setNewVehicleId] = React.useState<string>('');
	const { toast } = useToast();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [open, setOpen] = React.useState(false);
	const form = useForm<vehicleFormValues>({
		resolver: zodResolver(vehicleFormSchema),
		defaultValues,
		mode: 'onChange',
	});

	const onSubmit = async (data: vehicleFormValues) => {
		setIsLoading(true);
		try {
			const createVehicleResponse = await fetch(
				'/api/create-vehicle',
				{
					method: 'POST',
					body: JSON.stringify({
						category: data.category,
						price_per_tyre: data.price_by_tyre,
						plate_number: data.plate_number,
						vehicle_type: data.vehicle_type,
						nin: data.nin,
						owners_phone_number: data.owners_phone_number,
						owners_name: data.owners_name,
						
					}),
				}
			);
			const result = await createVehicleResponse.json();
			if (
				createVehicleResponse.status > 199 &&
				createVehicleResponse.status < 299
			) {
				toast({
					title: 'Vehicle Created Successfully',
				});
				setIsLoading(false);
				setOpen(true);
				form.reset();
				setNewVehicleId(result.data.vehicle_id);
				return NextResponse.json(result);
			} else {
				setIsLoading(false);
				toast({
					title: 'Vehicle NOT Created',
				});
				return NextResponse.json(result);
			}
		} catch (error) {
			setIsLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-4 '
			>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<FormField
						control={form.control}
						name='category'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-title1Bold pl-4'>
									Vehicle Category
								</FormLabel>

								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className='relative text-body flex  items-center h-14 rounded-2xl'>
											<SelectValue placeholder='Select a vehicle category' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value='detchable'>
											Detchable
										</SelectItem>
										<SelectItem value='non-detchable'>
											Non-Detchable
										</SelectItem>
										
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='vehicle_type'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-title1Bold pl-4'>
								Tyre Type
								</FormLabel>

								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className='relative text-body flex  items-center h-14 rounded-2xl'>
											<SelectValue placeholder='Select number of tyre' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value='8'>
											8
										</SelectItem>
										<SelectItem value='12'>
											12
										</SelectItem>
										<SelectItem value='14'>
											14
										</SelectItem>
										<SelectItem value='18'>
											18
										</SelectItem>
										<SelectItem value='24'>
											24
										</SelectItem>	
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

<FormField
						name='price_by_tyre'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-title1Bold pl-4'>
								Price
								</FormLabel>

								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className='relative text-body flex  items-center h-14 rounded-2xl'>
											<SelectValue placeholder='Select number of tyre' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
									<SelectItem value='8000'>
											8000
										</SelectItem>
										<SelectItem value='12,000'>
											12,000
										</SelectItem>
										<SelectItem value='14,000'>
											14,000
										</SelectItem>
										<SelectItem value='18,000'>
											18,000
										</SelectItem>
										<SelectItem value='24,000'>
											24,000
										</SelectItem>	
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					

					<FormField
						name='plate_number'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-title1Bold pl-4'>
									Plate Number
								</FormLabel>

								<FormControl>
									<Input
										className='relative text-body flex  items-center h-14 rounded-2xl'
										{...field}
										type='text'
										placeholder='Plate Number'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='nin'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-title1Bold pl-4'>
									NIN
								</FormLabel>

								<FormControl>
									<Input
										className='relative text-body flex  items-center h-14 rounded-2xl'
										{...field}
										type='text'
										placeholder='Enter NIN'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='owners_name'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-title1Bold pl-4'>
									{`Owner's Name`}
								</FormLabel>

								<FormControl>
									<Input
										className='relative text-body flex  items-center h-14 rounded-2xl'
										{...field}
										type='text'
										placeholder={`Enter owner's name`}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='owners_phone_number'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-title1Bold pl-4'>
									{`Owner's Phone Number`}
								</FormLabel>

								<FormControl>
									<Input
										className='relative text-body flex  items-center h-14 rounded-2xl'
										{...field}
										type='text'
										placeholder={`+23481209847859`}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					
				</div>
				<div className='flex justify-center items-center gap-6 text-title1Bold'>
					<Button
						variant={'outline'}
						size='lg'
						type='button'
						asChild
						className='p-4 py-2 rounded-normal w-28 '
					>
						<Link href={'/vehicles?page=1&limit=15'}>
							Back
						</Link>
					</Button>
					<Button
						variant='default'
						size='lg'
						type='submit'
						className='p-4 py-2 rounded-normal w-28'
					>
						{ 'Add Vehicle'}
					</Button>
				</div>
			</form>
			<Dialog
				open={open}
				onOpenChange={setOpen}
			>
				<DialogContent className='bg-secondary'>
					<div className='mx-auto flex-col'>
						<div className='flex flex-col items-center gap-5 mb-5'>
							<div className='h-20 w-20 text-awesome-foreground'>
								{/* {successIcon} */}
							</div>
							<div className='text-xl'>
								Vehicle created successfully.
							</div>
							<div className='text-sm'>
								Proceed to add a driver.
							</div>
						</div>
						<div className='flex flex-col gap-3'>
							<Button
								asChild
								className='rounded-xl'
							>
								<Link
									href={`/vehicles/${newVehicleId}/new-driver`}
								>
									Add Driver
								</Link>
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</Form>
	);
}

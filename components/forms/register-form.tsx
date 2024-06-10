'use client';
import { login } from '@/actions/login';
import CardWrapper from '@/components/shared/card-wrapper';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import FormError from '../shared/FormError';
import FormSuccess from '../shared/FormSuccess';

export default function RegistrationForm() {
	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
	});

	const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
		setError(undefined);
		setSuccess(undefined);
		startTransition(() => {
			login(values).then((data) => {
				if (data?.error) {
					setError(data.error);
				}
			});
		});
	};

	return (
		<CardWrapper
			headerLabel='Create an account'
			backButtonLabel='GO HOME'
			backButtonHref='/'
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-4'
				>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										disabled={isPending}
										{...field}
										type='email'
										placeholder='m@example.com'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										disabled={isPending}
										{...field}
										type='password'
										placeholder='*** ***'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className=''>
						{error && <FormError message={error} />}
						{success && <FormSuccess message={success} />}
					</div>

					<Button
						type='submit'
						className='w-full'
						disabled={isPending}
					>
						{isPending ? (
							<Loader className='h-4 w-4 animate-spin' />
						) : (
							'Login'
						)}
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
}

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
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import FormError from '../shared/FormError';
import FormSuccess from '../shared/FormSuccess';

export default function LoginForm() {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl') ?? undefined;
	const [showTwoFactor, setShowTwoFactor] = useState(false);
	const [error, setError] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();
	// initialize the form with schema for types
	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		setError(undefined);
		startTransition(() => {
			login(values, callbackUrl).then((data) => {
				if (data?.error) {
					setError(data.error);
				}
			});
		});
	};

	return (
		<CardWrapper
			headerLabel='Welcome back.'
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

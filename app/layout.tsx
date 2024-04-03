import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const ubuntu = Ubuntu({
	subsets: ['latin'],
	variable: '--ubuntu',
	weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
	title: 'Haulage',
	description: 'Heavy duty and trucks levy collection system',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					ubuntu.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}

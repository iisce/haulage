import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function createBreadcrumbDataFromUrl(
	url: string
): { label: string; href: string; isCurrentPage: boolean }[] {
	const path = url.replace(/^https?:\/\/[^/]+/, '');

	const segments = path.split('/').filter(Boolean);

	const breadcrumbData = segments.map((segment, index) => {
		const isCurrentPage = index === segments.length - 1;

		return {
			label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize
			href: `/${segments.slice(0, index + 1).join('/')}`,
			isCurrentPage,
		};
	});

	return breadcrumbData;
}

export const drawRect = (detections: any[], ctx: any) => {
	detections.forEach((prediction) => {
		const [x, y, width, height] = prediction['bbox'];
		const text = prediction['class'];

		const color = Math.floor(Math.random() * 16777215).toString(16);
		ctx.strokeStyle = '#' + color;
		ctx.font = '18px Arial';

		ctx.beginPath();
		ctx.fillStyle = '#' + color;
		ctx.fillText(text, x, y);
		ctx.rect(x, y, width, height);
		ctx.stroke();
	});
};

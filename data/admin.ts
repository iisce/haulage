import { axiosWithAuth } from '@/lib/axios.config';
import { AxiosError } from 'axios';

export const revalidate = 0;

export const getAdmins = async () => {
	try {
		const adminsRequest = await axiosWithAuth.get('/admins');

		if (adminsRequest.data) {
			const admins: IAdmin[] = adminsRequest.data;

			return admins;
		}

		return [];
	} catch (error) {
		if (error instanceof AxiosError) {
			console.log(error.message);
			return [];
		}
		console.log(error);
		return [];
	}
};

export const getAdminById = async (options: { id: string }) => {
	const { id } = options;
	try {
		const adminRequest = await axiosWithAuth.get(`/admins/${id}`);

		if (adminRequest.data) {
			const admins: IAdmin = adminRequest.data;

			return admins;
		}

		return null;
	} catch (error) {
		if (error instanceof AxiosError) {
			console.log(error.message);
			return null;
		}
		console.log(error);
		return null;
	}
};

export const revalidate = 0;

export const getAllVehicles = async () => {
	try {
		const vehiclesRequest = await fetch('http://localhost:5766/vehicles');

		const vehicles: IVehicle[] = await vehiclesRequest.json();

		if (vehicles) {
			return vehicles;
		}

		return [];
	} catch (error: any) {
		console.log({ error });
		return [];
	}
};

// export const getAllVehiclesByRole = async (options: { role: IRole }) => {
// 	const { role } = options;
// 	try {
// 		const vehiclesRequest = await fetch('http://localhost:5766/vehicles');

// 		const vehicles: IVehicle[] = await vehiclesRequest.json();

// 		if (vehicles && vehicles.length > 0) {
// 			const admins = vehicles.filter((admin) => admin.role === role);
// 			if (admins) {
// 				return admins;
// 			}
// 		}
// 		return [];
// 	} catch (error: any) {
// 		console.log({ error });
// 		return [];
// 	}
// };

export const getVehicleById = async (options: { id: string }) => {
	const { id } = options;
	try {
		const vehicleRequest = await fetch(
			`http://localhost:5766/vehicles/${id}`
		);

		const vehicle: IVehicle = await vehicleRequest.json();

		if (vehicle) {
			return vehicle;
		}
		return null;
	} catch (error: any) {
		console.log({ error });
		return null;
	}
};

type IRole = "admin" | "superadmin" | "agent";
type IStatus = "active" | "inactive";
// interface IUser {
// 	id: string;
// 	name: string;
// 	email: string;
// 	image: string;
// 	password: string;
// 	role: IRole;
// 	phone: string;
// 	status: IStatus;
// 	nin: string;
// 	address: string;
// 	park_id: string;
// }
interface IUser {
     _id: string;
     email: string;
     fullname: string;
     phonenumber: string;
     role: IRole;
     password: string;
     token: string;
     blacklist: boolean;
     nin?: string;
     lga?: string;
     location?: string;
     createdAt: string;
     updatedAt: string;
}
interface IAdmin extends IUser {
     nin: string;
     lga: string;
}
interface IAgent extends IAdmin {
     location: string;
}
interface ISuperadmin extends IUser {}
interface IVehicleOwner extends IUser {}
interface IVehicle {
     id: string;
     category: "DETACHABLE" | "NON_DETACHABLE";
     tyre_number: number;
     plate_number: string;
     owner_name: string;
     owner_nin: string;
     owner_phone: string;
     park: string;
}
interface ICode {
     code: string;
     email: string;
     _id: string;
     createdAt: string;
     updatedAt: string;
     __v: 0;
}

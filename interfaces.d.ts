type IRole = "Admin" | "Superadmin" | "Agent";
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
     __v: number;
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
interface IBankDetails {
     bankName: string;
     accountNumber: string;
     accountName: string;
     vehicle_id: string;
     _id: string;
     createdAt: string;
     updatedAt: string;
     __v: number;
}
interface IVehicle {
     _id: string;
     name: string;
     platenumber: string;
     nin: string;
     driversname: string;
     phonenumber: number;
     detachable: boolean;
     qrcode: string;
     bankdetails: IBankDetails;
     category: string;
     fee: number;
     blacklist: boolean;
     createdAt: string;
     updatedAt: string;
     __v: number;
}
interface ICode {
     code: string;
     email: string;
     _id: string;
     createdAt: string;
     updatedAt: string;
     __v: 0;
}
interface ITransaction {
     _id: string;
     amount: number;
     vehiclename: string;
     reference: string;
     vehicleid: string;
     status: string;
     createdAt: string;
     updatedAt: string;
     __v: number;
}
interface IActivity {
     _id: string;
     message: string;
     title: string;
     createdAt: string;
     updatedAt: string;
     __v: 0;
}

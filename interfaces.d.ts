type IRole = "Admin" | "Superadmin" | "Agent";
type IStatus = "active" | "inactive";
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

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
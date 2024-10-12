import {
     ActivityIcon,
     BarChart,
     Currency,
     Home,
     ScanBarcode,
     ScanFace,
     Settings,
     Truck,
     User,
     Users,
     Users2,
} from "lucide-react";

export const ROLES = ["SUPERADMIN", "ADMIN", "AGENT", "USER"] as const;

export const DASHBOARD_NAV_ITEMS = [
     {
          title: "Dashboard",
          href: "/dashboard",
          icon: <Home className="h-4 w-4" />,
     },
     {
          title: "Activities",
          href: "/activities",
          icon: <ActivityIcon className="h-4 w-4" />,
     },
     { title: "Admins", href: "/admins", icon: <Users className="h-4 w-4" /> },
     { title: "Agents", href: "/agents", icon: <Users2 className="h-4 w-4" /> },
     {
          title: "Revenue",
          href: "/revenue",
          icon: <BarChart className="h-4 w-4" />,
     },
     {
          title: "QR Scan",
          href: "/scan",
          icon: <ScanBarcode className="h-4 w-4" />,
     },
     {
          title: "Plate Scanner",
          href: "/plate-scanner",
          icon: <ScanFace className="h-4 w-4" />,
     },
     {
          title: "Settings",
          href: "/settings",
          icon: <Settings className="h-4 w-4" />,
     },
     {
          title: "Transactions",
          href: "/transactions",
          icon: <Currency className="h-4 w-4" />,
     },
     {
          title: "Vehicles",
          href: "/vehicles",
          icon: <Truck className="h-4 w-4" />,
     },
] as const;

export const HOME_NAV_ITEMS = [
     {
          title: "Home",
          href: "/",
     },
] as const;

export const SESSION: boolean = true;

export const VEHICLE_DETAILS = [
     {
          id: "1",
          plate_number: "John Doe",
          drivers_license: "Particular drivers_license",
          detachable: "Detachable",
          no_of_tyres: "000000000",
          registration_park: "000000000",
     },
];

export const USER_ADMIN: IAdmin = {
     _id: "hbdwkjhbfjhbsdjbh",
     fullname: "Super Admin",
     email: "sample@superadmin.com",
     password: "",
     role: "Superadmin",
     phonenumber: "+2348061729634",
     nin: "",
     token: "",
     blacklist: false,
     createdAt: "",
     updatedAt: "",
     lga: "",
     location: "",
     __v: 0,
};
export const TRUCK_TYPES = [
     { tyre_number: 4, price: 5000 },
     { tyre_number: 8, price: 10000 },
] as const;

export const BASE_URL = "https://haulage-api-latest.onrender.com";
// export const BASE_URL = "http://localhost:5766"; // JSON SERVER run json-server --watch db.json --port 5766
export const URLS = {
     auth: {
          login: "/api/auth/login",
          register: "/api/auth/register/admin",
     },
     activities: "/api/activities",
     user: {
          self: "/api/user",
          agents: {
               all: "/api/user/agent",
               create: "/api/user/create/agent",
          },
          admins: {
               all: "/api/user/admins",
               generate: "/api/user/create-validation-code",
               codes: {
                    all: "/api/user/codes",
                    email: "/api/user/code/email",
               },
          },
     },
     vehicles: {
          create: "/api/vehicles/onboard",
          all: "/api/vehicles",
          scan: "/api/vehicles/scan",
     },
};

// JSON SERVER run json-server --watch db.json --port 5766
// export const URLS = {
//      auth: {
//           login: "/api/auth/login",
//           register: "/api/auth/register/admin",
//      },
//      user: {
//           self: "/api/user",
//           agents: "/api/user/agent",
//           admins: {
//                all: "/api/user/admin",
//                generate: "/api/user/create-validation-code",
//           },
//      },
// };

export const GENERATED_CODES: ICode[] = [
     {
          _id: "666fb029fc97ddcec8cd4f93",
          code: "21841k",
          email: "christus2100@gmail.com",
          createdAt: "2024-06-17T03:40:25.210Z",
          updatedAt: "2024-06-17T03:40:25.210Z",
          __v: 0,
     },
] as const;

export const SAMPLE_ADMIN_DATA: IAdmin[] = [
     {
          blacklist: false,
          _id: "665e39ab6face93d33d76ef1",
          email: "uniben2018@gmail.com",
          fullname: "Emeke",
          phonenumber: "07036226327",
          role: "Admin",
          password:
               "$2a$10$/uAS9iPriCFuqGILPguV1OGi273JynrpcGE6pcWMUh1QanhpUXt66",
          token: "jIIXpc9VbtDIK6ESPNGAI3Lti8IEY7",
          lga: "ALIMOSHO",
          nin: "252618h828",
          createdAt: "2024-06-03T21:46:19.449Z",
          updatedAt: "2024-06-03T21:46:19.449Z",
          __v: 0,
     },
     {
          blacklist: false,
          _id: "665e45937e04c628da049da7",
          email: "uniben2001@gmail.com",
          fullname: "Emeke",
          phonenumber: "07036226327",
          role: "Admin",
          password:
               "$2a$10$pTadH8JIkh9BSsGZSYFTi.79JNfE.J/mmu8/svwFuUhqEBzM3Nmry",
          token: "2E4SEUBDEZmDsW8IX3Qllmpo5UwjKo",
          lga: "ALIMOSHO",
          nin: "252618h828",
          createdAt: "2024-06-03T22:37:07.028Z",
          updatedAt: "2024-06-03T22:37:07.028Z",
          __v: 0,
     },
     {
          _id: "665f107ebe3542e5937490d6",
          email: "christus2100@gmail.com",
          fullname: "Christus Admin",
          phonenumber: "08061719533",
          role: "Admin",
          password:
               "$2a$10$5n7n.Row.SXUUYFm/MQTS.BaqkTWFXUWunacy0xeyp3yKwyxIrg2G",
          token: "yIoqbptW5q3mi2Z8RXtso2i4TEJ5UX",
          lga: "awka",
          nin: "11111111111",
          blacklist: false,
          createdAt: "2024-06-04T13:02:54.356Z",
          updatedAt: "2024-06-04T13:02:54.356Z",
          __v: 0,
     },
     {
          _id: "6665b0fa62eb5cbc43d07cb9",
          email: "f@gmail.com",
          fullname: "Ayobami FFF",
          phonenumber: "09070569334",
          role: "Admin",
          password:
               "$2a$10$hPqHMX7tJEqUo7CfmpUwceoGK33igTLTopu3.I2w/biyMk0uwfEXO",
          token: "iaARajG0BbPwedRKEcXlRm3cOB2jc7",
          lga: "Ekwusigo",
          nin: "12345678900",
          blacklist: false,
          createdAt: "2024-06-09T13:41:14.297Z",
          updatedAt: "2024-06-09T13:41:14.297Z",
          __v: 0,
     },
     {
          _id: "6666e427b38ac662326b03d9",
          email: "divineonyi2004@gmail.com",
          fullname: "Onyekachukwu Divine ",
          phonenumber: "08064150715",
          role: "Admin",
          password:
               "$2a$10$x9weESl2.29oJpBdTJnGaOGzUrrAHnZAS3uNIWStPBiLMj82UZPuq",
          token: "T0Amug8FORvzauj1WVwINzk7HAzFcC",
          lga: "Dunukofia",
          nin: "27323362342",
          blacklist: false,
          createdAt: "2024-06-10T11:31:51.454Z",
          updatedAt: "2024-06-10T11:31:51.454Z",
          __v: 0,
     },
     {
          _id: "6666e90f750a6971ae635194",
          email: "oladimejidavid91@gmail.com",
          fullname: "david sokeye",
          phonenumber: "09067274874",
          role: "Admin",
          password:
               "$2a$10$/rtYOGJ3KcA.A.qZSBJJ0.QMhEO8AyP97YwX5plJAggcRwSa8kmjC",
          token: "4INfANEgFlq5ns535FLzmOYs8ReiOR",
          lga: "Awka North",
          nin: "00234556789",
          blacklist: false,
          createdAt: "2024-06-10T11:52:47.888Z",
          updatedAt: "2024-06-10T11:52:47.888Z",
          __v: 0,
     },
];

export const ANAMBRA_LGA_LIST = [
     { name: "Aguata", value: "Aguata" },
     { name: "Awka North", value: "Awka North" },
     { name: "Awka South", value: "Awka South" },
     { name: "Anambra East", value: "Anambra East" },
     { name: "Anambra West", value: "Anambra West" },
     { name: "Anaocha", value: "Anaocha" },
     { name: "Ayamelum", value: "Ayamelum" },
     { name: "Dunukofia", value: "Dunukofia" },
     { name: "Ekwusigo", value: "Ekwusigo" },
     { name: "Idemili North", value: "Idemili North" },
     { name: "Idemili South", value: "Idemili South" },
     { name: "Ihiala", value: "Ihiala" },
     { name: "Njikoka", value: "Njikoka" },
     { name: "Nnewi North", value: "Nnewi North" },
     { name: "Nnewi South", value: "Nnewi South" },
     { name: "Ogbaru", value: "Ogbaru" },
     { name: "Onitsha North", value: "Onitsha North" },
     { name: "Onitsha South", value: "Onitsha South" },
     { name: "Orumba North", value: "Orumba North" },
     { name: "Orumba South", value: "Orumba South" },
     { name: "Oyi", value: "Oyi" },
] as const;

export const ANAMBRA_LOCATION_LIST = [
     { name: "Location One", value: "Location One" },
     { name: "Location Two", value: "Location Two" },
     { name: "Location Three", value: "Location Three" },
];

export const TYRE_TYPE = [
     { name: "Eight (8) Tyres", fee: "8000" },
     { name: "Ten (10) Tyres", fee: "10000" },
     { name: "Twelves (12) Tyres", fee: "12000" },
] as const;

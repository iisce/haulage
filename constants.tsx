import { Role } from "@prisma/client";
import {
     ActivityIcon,
     Currency,
     Home,
     ScanBarcode,
     ScanFace,
     Settings,
     Truck,
     Users,
     Users2,
} from "lucide-react";

export const ROLES = [
     Role.ADMIN,
     Role.AGENT,
     Role.SUPER_ADMIN,
     Role.USER,
] as const;
export const NO_USER_ROLE = [Role.ADMIN, Role.AGENT, Role.SUPER_ADMIN];

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
     // {
     //      title: "Revenue",
     //      href: "/revenue",
     //      icon: <BarChart className="h-4 w-4" />,
     // },
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
export const DASHBOARD_NAV_ITEMS_ADMIN = [
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
     { title: "Agents", href: "/agents", icon: <Users2 className="h-4 w-4" /> },
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
          title: "Vehicles",
          href: "/vehicles",
          icon: <Truck className="h-4 w-4" />,
     },
] as const;
export const DASHBOARD_NAV_ITEMS_AGENT = [
     {
          title: "Activities",
          href: "/activities",
          icon: <ActivityIcon className="h-4 w-4" />,
     },
     {
          title: "Dashboard",
          href: "/dashboard",
          icon: <Home className="h-4 w-4" />,
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
          title: "Vehicles",
          href: "/vehicles",
          icon: <Truck className="h-4 w-4" />,
     },
] as const;
export const DASHBOARD_NAV_ITEMS_NONE = [
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

export const TRUCK_TYPES = [
     { tyre_number: 4, price: 5000 },
     { tyre_number: 8, price: 10000 },
] as const;

export const BASE_URL = process.env.BACKEND_URL ?? "http://localhost:6550";
// export const BASE_URL = "http://localhost:6550"; // JSON SERVER run json-server --watch db.json --port 6550
export const URLS = {
     auth: {
          login: "/api/auth/signin",
          register: "/api/auth/register/admin",
     },
     barcodes: {
          all: "/api/barcode/all",
          code: "/api/barcode/fetch-by-code",
     },
     activities: "/api/activities/all",
     user: {
          self: "/api/user/one",
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
          create: "/api/vehicles/create",
          all: "/api/vehicles/all",
          update: "/api/vehicles/all",
          delete: "/api/vehicles/all",
          one: "/api/vehicles/one",
          scan: "/api/vehicles/scan",
     },
     payment: {
          main: "/api/payment/",
     },
     transactions: {
          all: "/api/transactions/all",
          one: "/api/transactions/one",
     },
};

// JSON SERVER run json-server --watch db.json --port 6550
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

export const statusColor = {
     PENDING: "bg-orange-600 text-orange-100",
     SUCCESS: "bg-green-600 text-green-100",
     FAILED: "bg-red-600 text-red-100",
} as const;

export const ITEMS_PER_PAGE = 10;

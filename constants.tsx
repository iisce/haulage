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
     role: "superadmin",
     phonenumber: "+2348061729634",
     nin: "",
     token: "",
     blacklist: false,
     createdAt: "",
     updatedAt: "",
     lga: "",
     location: "",
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
     user: {
          self: "/api/user",
          agents: "/api/user/agent",
          admins: {
               all: "/api/user/admin",
               generate: "/api/user/create-validation-code",
          },
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
          code: "93595H",
          email: "f@gmail.com",
          _id: "666555a55872dbc9ef715a44",
          createdAt: "2024-06-09T07:11:33.965Z",
          updatedAt: "2024-06-09T07:11:33.965Z",
          __v: 0,
     },
     {
          code: "80087w",
          email: "e@gmail.com",
          _id: "666555a55872dbc9ef715a46",
          createdAt: "2024-06-09T07:11:33.981Z",
          updatedAt: "2024-06-09T07:11:33.981Z",
          __v: 0,
     },
     {
          code: "58189e",
          email: "d@gmail.com",
          _id: "666555a55872dbc9ef715a48",
          createdAt: "2024-06-09T07:11:33.984Z",
          updatedAt: "2024-06-09T07:11:33.984Z",
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
];

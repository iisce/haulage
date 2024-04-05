import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { PaginationDemo } from "./pagination"
  
export const DRIVERS_DETAILS = [
    {
      name: "Ikechukwu John",
      phoneNumber: "+234908976683",
      email: "emeka@example.com",
      state: "Enugu",
      lga: "Ezzagu",
      nin: "6474837383829",
    },
    {
      name: "INV002",
      phoneNumber: "Pending",
      email: "$150.00",
      state: "PayPal",
     lga: "Ezzagu",
      nin: "6474837383829",
    },
    {
      name: "INV003",
      phoneNumber: "Unpaid",
      email: "$350.00",
      state: "Bank Transfer",
     lga: "Ezzagu",
      nin: "6474837383829",
    },
    {
      name: "INV004",
      phoneNumber: "Paid",
      email: "$450.00",
      state: "Credit Card",
     lga: "Ezzagu",
      nin: "6474837383829",
    },
    {
      name: "INV005",
      phoneNumber: "Paid",
      email: "$550.00",
      state: "PayPal",
     lga: "Ezzagu",
      nin: "6474837383829",
    },
    {
      name: "INV006",
      phoneNumber: "Pending",
      email: "$200.00",
      state: "Bank Transfer",
     lga: "Ezzagu",
      nin: "6474837383829",
    },
    {
      name: "INV007",
      phoneNumber: "Unpaid",
      email: "$300.00",
      state: "Credit Card",
     lga: "Ezzagu",
      nin: "6474837383829",
    },
  ]
  
  export default function DiversTable() {
    return (
        <div>
             <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Street</TableHead>
            <TableHead className="text-right">L.G.A</TableHead>
            <TableHead className="text-right">NIN</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DRIVERS_DETAILS.map((driverDetial, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{driverDetial.name}</TableCell>
              <TableCell>{driverDetial.phoneNumber}</TableCell>
              <TableCell>{driverDetial.email}</TableCell>
              <TableCell>{driverDetial.state}</TableCell>
              <TableCell>{driverDetial.lga}</TableCell>
              <TableCell>{driverDetial.nin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        <PaginationDemo/>
        </div>
     
    )
  }
  
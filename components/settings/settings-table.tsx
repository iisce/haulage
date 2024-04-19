import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";


export default function SettingsTable() {
    return (
      <Table className=" border-none">
  <TableHeader className=" border-b-2">
    <TableRow className="border-none">
      <TableHead className="border-none">Name</TableHead>
      <TableHead className="border-none">Value</TableHead>
      <TableHead className="border-none">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className=" border-none">Haulage_Bank_Account</TableCell>
      <TableCell className=" border-none">1111111111</TableCell>
      <TableCell className="border-none">
        <Dialog>
          <DialogTrigger>
            <Button>
              <EyeOpenIcon className=" mr-4" />
              View
            </Button>
          </DialogTrigger>
          <DialogContent>
            Something
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  </TableBody>
      </Table>
    )
  }
  
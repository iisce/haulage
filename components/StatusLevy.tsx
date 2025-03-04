"use client";

import { useEffect, useState } from "react";
import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogFooter,
     DialogHeader,
     DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import type { Vehicle, tyreSettings } from "@prisma/client";
import { getAllTyreSettings } from "@/actions/settings/tyre";
import { chargeLevy } from "@/actions/levy";
import { toast } from "sonner";
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "./ui/select";
import {
     AlertDialog,
     AlertDialogContent,
     AlertDialogFooter,
     AlertDialogHeader,
     AlertDialogTitle,
} from "./ui/alert-dialog";
import { useRouter } from "next/navigation";
import { PaymentVerificationButton } from "./PaymentVerificationButton";

interface PaymentDetails {
     accountName: string;
     accountNumber: string;
     bankName: string;
     paymentReference: string;
     amount: number;
     paymentStatus: string;
}

export default function StatusLevy({ vehicle }: { vehicle: Vehicle }) {
     const [showNewLevy, setShowNewLevy] = useState(false);
     const [showConfirmation, setShowConfirmation] = useState(false);
     const [tyreSettings, setTyreSettings] = useState<tyreSettings[]>([]);
     const [selectedTyreSetting, setSelectedTyreSetting] =
          useState<tyreSettings | null>(null);
     const [amount, setAmount] = useState<number>(0);
     const [isLoading, setIsLoading] = useState(false);
     const [paymentDetails, setPaymentDetails] =
          useState<PaymentDetails | null>(null);
     const router = useRouter();

     useEffect(() => {
          const fetchTyreSettings = async () => {
               try {
                    const settings = (await getAllTyreSettings()).data ?? [];
                    setTyreSettings(settings);
                    const matchingSetting = settings.find(
                         (setting) =>
                              setting.number_of_tyres ===
                              vehicle.number_of_tyres,
                    );
                    if (matchingSetting) {
                         setSelectedTyreSetting(matchingSetting);
                         setAmount(matchingSetting.fee);
                    }
               } catch (error) {
                    console.error("Failed to fetch tyre settings:", error);
                    toast.error("Error", {
                         description:
                              "Failed to load tyre settings. Please try again.",
                    });
               }
          };

          fetchTyreSettings();
     }, [vehicle.number_of_tyres]);

     const handleTyreSettingChange = (value: string) => {
          const setting = tyreSettings.find(
               (s) => s.number_of_tyres === Number.parseInt(value),
          );
          if (setting) {
               setSelectedTyreSetting(setting);
               setAmount(setting.fee);
          }
     };

     const handleCharge = async () => {
          setIsLoading(true);
          try {
               const charge = vehicle.isDetachable
                    ? await chargeLevy(
                           vehicle.id,
                           selectedTyreSetting?.number_of_tyres,
                      )
                    : await chargeLevy(vehicle.id);
               setShowConfirmation(false);
               setShowNewLevy(false);
               toast.success("Success", {
                    description: `Levy of ${amount} has been charged to the vehicle.`,
               });
               router.refresh();
               if (charge.data) {
                    setPaymentDetails({
                         accountName: charge.data.accountName,
                         accountNumber: charge.data.accountNumber,
                         bankName: charge.data.bankName,
                         paymentReference: charge.data.paymentReference,
                         amount: charge.data.amount,
                         paymentStatus: charge.data.paymentStatus,
                    });
               }
          } catch (error) {
               toast.error("Error", {
                    description: "Failed to charge levy. Please try again.",
               });
          } finally {
               setIsLoading(false);
          }
     };

     return (
          <>
               <Button onClick={() => setShowNewLevy(true)}>Add Levy</Button>
               <Dialog open={showNewLevy} onOpenChange={setShowNewLevy}>
                    <DialogContent className="sm:max-w-[425px]">
                         <DialogHeader>
                              <DialogTitle>New Levy</DialogTitle>
                              <DialogDescription>
                                   Charge a new levy to this vehicle based on
                                   its tyre count.
                              </DialogDescription>
                         </DialogHeader>
                         <form
                              onSubmit={(e) => {
                                   e.preventDefault();
                                   setShowConfirmation(true);
                              }}
                         >
                              <div className="grid gap-4 py-4">
                                   <div className="grid items-center gap-4">
                                        <Label
                                             htmlFor="tyreNumber"
                                             className=""
                                        >
                                             Tyre Number
                                        </Label>
                                        {vehicle.isDetachable ? (
                                             <Select
                                                  onValueChange={
                                                       handleTyreSettingChange
                                                  }
                                                  defaultValue={vehicle.number_of_tyres.toString()}
                                             >
                                                  <SelectTrigger className="w-full">
                                                       <SelectValue placeholder="Select tyre number" />
                                                  </SelectTrigger>
                                                  <SelectContent>
                                                       {tyreSettings.map(
                                                            (setting) => (
                                                                 <SelectItem
                                                                      key={
                                                                           setting.number_of_tyres
                                                                      }
                                                                      value={setting.number_of_tyres.toString()}
                                                                 >
                                                                      {
                                                                           setting.number_of_tyres
                                                                      }
                                                                 </SelectItem>
                                                            ),
                                                       )}
                                                  </SelectContent>
                                             </Select>
                                        ) : (
                                             <Input
                                                  id="tyreNumber"
                                                  value={
                                                       vehicle.number_of_tyres
                                                  }
                                                  className=""
                                                  disabled
                                             />
                                        )}
                                   </div>
                                   <div className="grid items-center gap-4">
                                        <Label htmlFor="amount" className="">
                                             Amount
                                        </Label>
                                        <Input
                                             id="amount"
                                             value={amount}
                                             className=""
                                             disabled
                                        />
                                   </div>
                              </div>
                              <DialogFooter>
                                   <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setShowNewLevy(false)}
                                   >
                                        Cancel
                                   </Button>
                                   <Button type="submit">Charge</Button>
                              </DialogFooter>
                         </form>
                    </DialogContent>
               </Dialog>
               <Dialog
                    open={showConfirmation}
                    onOpenChange={setShowConfirmation}
               >
                    <DialogContent>
                         <DialogHeader>
                              <DialogTitle>Confirm Levy Charge</DialogTitle>
                              <DialogDescription>
                                   Are you sure you want to charge a levy of{" "}
                                   {amount} to this vehicle? This action cannot
                                   be undone.
                              </DialogDescription>
                         </DialogHeader>
                         <DialogFooter>
                              <Button
                                   variant="outline"
                                   onClick={() => setShowConfirmation(false)}
                              >
                                   Cancel
                              </Button>
                              <Button
                                   onClick={handleCharge}
                                   disabled={isLoading}
                              >
                                   {isLoading
                                        ? "Charging..."
                                        : "Confirm Charge"}
                              </Button>
                         </DialogFooter>
                    </DialogContent>
               </Dialog>
               {paymentDetails && (
                    <AlertDialog
                         open={!!paymentDetails}
                         onOpenChange={() => setPaymentDetails(null)}
                    >
                         <AlertDialogContent>
                              <AlertDialogHeader>
                                   <AlertDialogTitle>
                                        Payment Details
                                   </AlertDialogTitle>
                              </AlertDialogHeader>
                              <div className="grid gap-4 py-4">
                                   <div className="grid grid-cols-2 items-center gap-4">
                                        <Label>Account Name:</Label>
                                        <span>
                                             {paymentDetails.accountName}
                                        </span>
                                   </div>
                                   <div className="grid grid-cols-2 items-center gap-4">
                                        <Label>Account Number:</Label>
                                        <span>
                                             {paymentDetails.accountNumber}
                                        </span>
                                   </div>
                                   <div className="grid grid-cols-2 items-center gap-4">
                                        <Label>Bank Name:</Label>
                                        <span>{paymentDetails.bankName}</span>
                                   </div>
                                   <div className="grid grid-cols-2 items-center gap-4">
                                        <Label>Payment Reference:</Label>
                                        <span>
                                             {paymentDetails.paymentReference}
                                        </span>
                                   </div>
                                   <div className="grid grid-cols-2 items-center gap-4">
                                        <Label>Amount:</Label>
                                        <span>{paymentDetails.amount}</span>
                                   </div>
                                   <div className="grid grid-cols-2 items-center gap-4">
                                        <Label>Payment Status:</Label>
                                        <span>
                                             {paymentDetails.paymentStatus}
                                        </span>
                                   </div>
                              </div>
                              <AlertDialogFooter>
                                   <Button
                                        onClick={() => setPaymentDetails(null)}
                                   >
                                        Close
                                   </Button>
                                   <PaymentVerificationButton
                                        paymentReference={
                                             paymentDetails.paymentReference
                                        }
                                   />
                              </AlertDialogFooter>
                         </AlertDialogContent>
                    </AlertDialog>
               )}
          </>
     );
}

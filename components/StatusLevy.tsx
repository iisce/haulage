"use client";
import { useState } from "react";
import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogFooter,
     DialogHeader,
     DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function StatusLevy() {
     const [showNewLevy, setShowNewLevy] = useState(false);
     const [showConfirmation, setShowConfirmation] = useState(false);

     return (
          <>
               <Button onClick={() => setShowNewLevy(true)}>New Levy</Button>
               <Dialog open={showNewLevy} onOpenChange={setShowNewLevy}>
                    <DialogContent className="max-w-3xl">
                         <DialogHeader>
                              <DialogTitle>New Levy</DialogTitle>
                              <DialogDescription>
                                   Create new levy
                              </DialogDescription>
                         </DialogHeader>
                         <div className="max-h-[60vh] overflow-y-auto">
                              <div className="space-y-4">
                                   <div className="flex items-center justify-between">
                                        <Label htmlFor="tyreNumber">
                                             Tyre Number
                                        </Label>
                                        <Badge variant="secondary">
                                             10 Tyres
                                        </Badge>
                                   </div>
                                   <Input
                                        id="tyreNumber"
                                        placeholder="Enter tyre number"
                                   />
                                   <div className="flex items-center justify-between">
                                        <Label htmlFor="amount">Amount</Label>
                                        <div className="text-2xl font-bold">
                                             $30
                                        </div>
                                   </div>
                                   <Input
                                        id="amount"
                                        placeholder="Enter amount"
                                   />
                              </div>
                              <div className="mt-5 grid grid-cols-2 gap-2">
                                   <Button variant="destructive">Cancel</Button>
                                   <Button
                                        onClick={() =>
                                             setShowConfirmation(true)
                                        }
                                   >
                                        Charge
                                   </Button>
                              </div>
                         </div>
                    </DialogContent>
               </Dialog>
               <Dialog
                    open={showConfirmation}
                    onOpenChange={setShowConfirmation}
               >
                    <DialogContent>
                         <DialogHeader>
                              <DialogTitle>Are you sure?</DialogTitle>
                              <DialogDescription>
                                   This action cannot be undone. This will
                                   permanently charge the new levy to the
                                   vehicle.
                              </DialogDescription>
                         </DialogHeader>
                         <DialogFooter>
                              <Button
                                   variant="outline"
                                   onClick={() => setShowConfirmation(false)}
                              >
                                   No
                              </Button>
                              <Button
                                   onClick={() => setShowConfirmation(false)}
                              >
                                   Yes
                              </Button>
                         </DialogFooter>
                    </DialogContent>
               </Dialog>
          </>
     );
}

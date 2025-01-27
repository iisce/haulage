"use client";

import { attachBarcodeToVehicle } from "@/actions/barcode";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle, Copy, Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function ScanToAddSticker({ id }: { id: string }) {
     const [result, setResult] = useState<string | null>(null);
     const [resultId, setResultId] = useState<string | null>(null);
     const [open, setOpen] = useState(false);
     const [scanning, setScanning] = useState(false);
     const [scanCount, setScanCount] = useState(0);
     const [isAddingSticker, setIsAddingSticker] = useState(false);
     const scannerRef = useRef<QrScanner | null>(null);
     const router = useRouter();

     const startScan = () => {
          setResult(null);
          setOpen(false);
          setScanning(true);
          setScanCount(0);
          scannerRef.current?.start();
     };

     const handleScanResult = async (result: string) => {
          setScanning(false);
          setResult(result);

          // Extract the sticker ID from the scanned URL
          const stickerIdMatch = result.match(/\/s\/(\d+)$/);
          const stickerId = stickerIdMatch ? stickerIdMatch[1] : null;

          if (!stickerId) {
               toast.error("Invalid Sticker");
               return null;
          }

          setResultId(stickerId);
          setOpen(true);
          setScanCount(scanCount + 1);

          if (scanCount + 1 >= 10) {
               scannerRef.current?.destroy();
          }
     };

     const addSticker = async () => {
          if (!resultId) return;

          setIsAddingSticker(true);
          try {
               const result = await attachBarcodeToVehicle({
                    vehicleId: id,
                    code: resultId,
               });
               if (result.success) {
                    toast.success("Sticker Added Successfully");
                    router.refresh();
               } else {
                    toast.error("Sticker NOT Added", {
                         description: result.message,
                    });
               }
          } catch (error) {
               toast.error("Sticker NOT Added", {
                    description: "An unexpected error occurred",
               });
          } finally {
               setIsAddingSticker(false);
               setOpen(false);
          }
     };

     useEffect(() => {
          const videoElement = document.getElementById(
               "video",
          ) as HTMLVideoElement;

          scannerRef.current = new QrScanner(videoElement, handleScanResult);

          if (scanning) {
               scannerRef.current?.start();
          }

          return () => {
               scannerRef.current?.destroy();
          };
     }, [scanning, handleScanResult]); // Added handleScanResult to dependencies

     return (
          <div className="grid">
               <div className="mb-2 text-xl font-bold">Scan Sticker</div>
               <div className="w-full max-w-lg">
                    <Card className="aspect-square h-72 overflow-hidden">
                         <video
                              className="h-full w-full object-cover"
                              id="video"
                         />
                    </Card>
                    <Button
                         className="mt-4"
                         onClick={startScan}
                         disabled={scanning || scanCount >= 10}
                    >
                         Start Scan
                    </Button>
               </div>
               <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="bg-secondary">
                         <div className="mx-auto w-full max-w-60 flex-col">
                              <div className="mb-5 flex flex-col items-center gap-5">
                                   <CheckCircle className="text-awesome-foreground h-20 w-20" />
                                   <div className="text-xl">
                                        Sticker Scanned
                                   </div>
                              </div>
                              <div className="mb-5 flex flex-col text-center">
                                   <div>Sticker ID</div>
                                   <div>{resultId}</div>
                              </div>
                              <div className="flex flex-col gap-3">
                                   <Button
                                        className="flex gap-2 rounded-xl"
                                        onClick={() => {
                                             navigator.clipboard.writeText(
                                                  resultId as string,
                                             );
                                             toast.info("COPIED!!!");
                                        }}
                                   >
                                        <Copy className="h-4 w-4" />
                                        Copy
                                   </Button>
                                   <Button
                                        className="gap-1.5"
                                        onClick={addSticker}
                                        disabled={isAddingSticker}
                                   >
                                        {isAddingSticker ? (
                                             <>
                                                  <Loader2Icon className="h-4 w-4 animate-spin" />
                                                  Adding Sticker
                                             </>
                                        ) : (
                                             "Add Sticker"
                                        )}
                                   </Button>
                              </div>
                         </div>
                    </DialogContent>
               </Dialog>
          </div>
     );
}

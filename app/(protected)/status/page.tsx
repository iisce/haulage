import QRScanner from "@/components/scan-page/qr-scanner";
import React from "react";

export default function StatusPage() {
     return (
          <div className="grid min-h-[80svh]">
               <QRScanner actions={{ redirect: { to: "/status" } }} />
          </div>
     );
}

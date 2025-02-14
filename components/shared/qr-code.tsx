"use client";
import QRCode from "qrcode.react";

export default function QrCode({ text }: { text: string }) {
     return (
          <QRCode
               value={text}
               size={300}
               className="rounded-lg border border-gray-500 p-3 dark:border-gray-400"
          />
     );
}

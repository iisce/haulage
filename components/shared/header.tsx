import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header({ label }: { label: string }) {
     return (
          <div className="flex w-full flex-col items-center justify-center">
               <div>
                    <Link href={"/"}>
                         <Image
                              src="https://transpay.vercel.app/anambara.png"
                              alt="HauleFee Logo"
                              height={60}
                              width={60}
                              className="h-14 w-14 dark:invert"
                              priority
                         />
                    </Link>
               </div>
               <h1 className="text-3xl font-semibold">HauleFee</h1>
               <p className="text-sm text-muted-foreground">{label}</p>
          </div>
     );
}

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Toaster } from "sonner";
import Provider from "@/components/session-provider";

const ubuntu = Ubuntu({
     subsets: ["latin"],
     variable: "--ubuntu",
     weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
     title: "HauleFee",
     description:
          "Anambra haulage (heavy duty and trucks) levy collection system",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <Provider>
                    <body
                         className={cn(
                              "min-h-screen overflow-x-clip bg-background font-sans antialiased",
                              ubuntu.variable,
                         )}
                    >
                         <NextTopLoader color="#000000" />
                         {children}
                         <Toaster richColors />
                    </body>
               </Provider>
          </html>
     );
}

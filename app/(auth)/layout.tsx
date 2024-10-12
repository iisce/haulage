import Image from "next/image";

export default function AuthLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <main className="min-h-screen w-full lg:grid lg:grid-cols-2">
               <div className="flex items-center justify-center">
                    <div className="no-scrollbar flex max-h-[100svh] w-full flex-col gap-6 overflow-y-scroll py-5">
                         {children}
                    </div>
               </div>
               <div className="hidden bg-muted lg:block">
                    <Image
                         src="/login.jpg"
                         alt="Image"
                         width="1920"
                         height="1080"
                         priority
                         className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
               </div>
          </main>
     );
}

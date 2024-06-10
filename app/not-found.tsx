import Link from "next/link";
import { headers } from "next/headers";

export default function NotFound() {
     const headersList = headers();
     const domain = headersList.get("referer");
     return (
          <div className="grid h-full place-items-center">
               <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-2 text-center">
                    <h2>Not Found: {domain}</h2>
                    <p>
                         Link might be broken or you are not permitted to view
                         this page
                    </p>
                    <p>
                         Go to <Link href="/dashboard">Dashboard</Link>
                    </p>
               </div>
          </div>
     );
}

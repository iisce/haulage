import Link from "next/link";

export default function NotFound() {
     return (
          <div className="container mx-auto grid h-screen place-items-center p-4">
               <div className="grid gap-2 text-center">
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link href="/">Return Home</Link>
               </div>
          </div>
     );
}

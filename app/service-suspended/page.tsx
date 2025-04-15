export default function ServiceSuspended() {
     return (
          <div className="flex min-h-screen flex-col bg-black text-white">
               <div className="flex flex-1 items-center justify-center">
                    <div className="mx-auto w-full max-w-md p-6">
                         <div className="mb-8 text-center">
                              <svg
                                   className="mx-auto mb-4 h-12 w-12"
                                   viewBox="0 0 76 65"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg"
                              >
                                   <path
                                        d="M37.5274 0L75.0548 65H0L37.5274 0Z"
                                        fill="white"
                                   />
                              </svg>
                              <h1 className="mb-4 text-4xl font-bold tracking-tight">
                                   Service Suspended
                              </h1>
                              <p className="mb-6 text-lg text-gray-400">
                                   Your access to this service has been
                                   temporarily suspended due to non-renewal.
                                   Please contact support or settle the renewal
                                   fee to restore access.
                              </p>
                         </div>
                    </div>
               </div>
               <footer className="py-6 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()}</p>
               </footer>
          </div>
     );
}

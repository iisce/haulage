"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HeroSection({ user }: { user: IUser | null }) {
     return (
          <AuroraBackground>
               <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                         delay: 0.3,
                         duration: 0.8,
                         ease: "easeInOut",
                    }}
                    className="relative flex flex-col items-center justify-center gap-4 px-4"
               >
                    <h1>
                         HauleFee - Anambra Haulage Revenue Collection System
                    </h1>
                    <div className="py-4 text-base font-extralight dark:text-neutral-200 md:text-4xl">
                         Automated levy collection from heavy duty vehicles and
                         trucks.
                    </div>
                    {user ? (
                         <Link
                              className={cn(buttonVariants())}
                              href="/dashboard"
                         >
                              Go To Dashboard
                         </Link>
                    ) : (
                         <Link className={cn(buttonVariants())} href="/sign-in">
                              Are you an admin? Log in
                         </Link>
                    )}
               </motion.div>
          </AuroraBackground>
     );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '../ui/aurora-background';
import { Button } from '../ui/button';

export default function HeroSection() {
	return (
		<AuroraBackground>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}w
				className='relative flex flex-col gap-4 items-center justify-center px-4'
			>
				<h1>Haulage Revenue Collection System</h1>
				<div className='font-extralight text-base md:text-4xl dark:text-neutral-200 py-4'>
					Automated levy collection from heavy duty vehicles and
					trucks.
				</div>
				<Button>Are you an admin? Log in</Button>
			</motion.div>
		</AuroraBackground>
	);
}

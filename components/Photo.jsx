"use client"

import { easeIn, easeInOut, motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: easeIn } }}
        className="relative flex items-center justify-center"
      >
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: easeInOut } }}
          className="absolute inset-0 m-auto w-[198px] h-[198px] xl:w-[499px] xl:h-[498px] mix-blend-lighten"
        >
          <Image 
            src="/assets/portfolio_image2.jpg" 
            priority 
            quality={100}
            fill 
            alt="Profile"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 52vw, 33vw"
            className="object-cover p-4 rounded-full"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg 
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[500px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253"
            cy="253" 
            r="250" 
            stroke="#00ff99" 
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo

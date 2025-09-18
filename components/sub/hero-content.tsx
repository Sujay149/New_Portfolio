"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20] relative"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-primary opacity-10 blur-xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 25, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-gradient-secondary opacity-20 blur-xl"
        />
      </div>

      {/* Left Content */}
      <div className="w-full flex flex-col gap-6 justify-center m-auto text-center md:text-start relative z-10">
        {/* Enhanced Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center justify-center md:justify-start gap-3 py-3 px-4 max-w-fit mx-auto md:mx-0 group"
        >
          <div className="relative">
            <SparklesIcon className="text-primary-400 h-5 w-5 group-hover:animate-pulse" />
            <div className="absolute inset-0 text-primary-400 h-5 w-5 animate-ping opacity-20" />
          </div>
          <h1 className="Welcome-text text-[13px] md:text-[14px] font-semibold tracking-wide">
            Full Stack Developer
          </h1>
          <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl" />
        </motion.div>

        {/* Enhanced Hero Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="space-y-2"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white max-w-[700px] leading-tight">
            Bringing{" "}
            <motion.span 
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Concepts
            </motion.span>{" "}
            to Life
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-[700px] leading-tight">
            with{" "}
            <motion.span 
              className="gradient-text inline-block relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Code
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              />
            </motion.span>
          </h2>
        </motion.div>

        {/* Enhanced Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg sm:text-xl text-gray-300 my-6 max-w-[550px] mx-auto md:mx-0 leading-relaxed"
        >
          I&apos;m a{" "}
          <span className="text-primary-400 font-semibold">Full Stack Software Engineer</span>{" "}
          specializing in building{" "}
          <span className="text-accent-400 font-semibold">modern web applications</span>.
          Check out my projects and skills below.
        </motion.p>

        {/* Enhanced Call-to-Action Button */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start"
        >
          <motion.a
            href="#projects"
            className="btn-primary group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <motion.svg 
                className="w-5 h-5"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
          </motion.a>
          
          <motion.a
            href="#about-me"
            className="btn-secondary group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              About Me
              <motion.svg 
                className="w-4 h-4"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ rotate: 180 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          variants={slideInFromLeft(1.2)}
          className="flex items-center gap-6 justify-center md:justify-start mt-4"
        >
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Available for work</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Based in India</span>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-8 md:mt-0 relative"
      >
        <div className="relative group">
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-glow opacity-30 rounded-full blur-3xl group-hover:opacity-50 transition-opacity duration-500" />
          
          {/* Main image with enhanced styling */}
          <motion.div
            className="relative z-10"
            whileHover={{ 
              rotate: [0, 5, -5, 0],
              scale: 1.05
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/hero-bg.svg"
              alt="work icons"
              height={500}
              width={500}
              draggable={false}
              className="select-none drop-shadow-2xl filter brightness-110 contrast-125 sm:h-[500px] sm:w-[500px] md:h-[550px] md:w-[550px]"
            />
          </motion.div>
          
          {/* Floating tech icons */}
          <motion.div
            className="absolute top-16 -left-8 glass w-16 h-16 flex items-center justify-center"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-2xl">⚛️</span>
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 -right-6 glass w-14 h-14 flex items-center justify-center"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <span className="text-xl">🚀</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

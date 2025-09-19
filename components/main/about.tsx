"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { CanvasRevealEffect } from "../ui/CanvasRevealEffect";

export const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const tabs = [
    {
      title: "My Story",
      icon: "📖",
      content: {
        heading: "The Journey of a Developer",
        text: "From curiosity-driven experiments to building production-ready applications, my journey has been fueled by an insatiable appetite for learning and creating. I believe in writing code that not only works but tells a story."
      }
    },
    {
      title: "Philosophy",
      icon: "💡",
      content: {
        heading: "Code with Purpose",
        text: "Every line of code I write serves a purpose. I believe in clean architecture, scalable solutions, and user-centric design. Technology should solve real problems and create meaningful experiences."
      }
    },
    {
      title: "Vision",
      icon: "🚀",
      content: {
        heading: "Building the Future",
        text: "I envision a digital world where technology seamlessly integrates with human needs. My goal is to contribute to this vision by creating applications that are not just functional, but transformative."
      }
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 95, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", level: 90, icon: "⚙️", color: "from-green-500 to-emerald-500" },
    { name: "Database Design", level: 85, icon: "🗄️", color: "from-purple-500 to-pink-500" },
    { name: "Cloud", level: 80, icon: "☁️", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section ref={ref} id="about-me" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-20 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Mesh Gradient */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 opacity-50"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Dynamic Light Rays */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 bg-gradient-conic from-transparent via-purple-500/10 to-transparent" />
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="max-w-7xl w-full relative z-10">
        {/* Revolutionary Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative inline-block"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-cyan-400 mb-8 relative">
              ABOUT
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <p className="text-2xl text-gray-300 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
              Crafting Digital Experiences That{" "}
              <span className="gradient-text font-semibold">Transform Ideas Into Reality</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Interactive Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* 3D Profile Card */}
            <div className="relative group perspective-1000">
              <motion.div
                className="relative w-full aspect-square max-w-md mx-auto preserve-3d"
                whileHover={{ rotateY: 15, rotateX: 10 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Main Profile Card */}
                <div className="absolute inset-0 card-premium p-8 transform-gpu">
                  <div className="relative h-full flex flex-col items-center justify-center space-y-6">
                    {/* Profile Image with Advanced Effects */}
                    <div className="relative">
                      <motion.div
                        className="w-48 h-48 rounded-full overflow-hidden relative"
                        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Image
                          src="/sujay.png"
                          alt="Profile"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                      </motion.div>
                      
                      {/* Orbital Rings */}
                      <motion.div
                        className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
                      />
                      <motion.div
                        className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
                      />
                    </div>
                    
                    {/* Interactive Stats */}
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold text-white">Sujay Babu</h3>
                      <p className="text-purple-400 font-medium">Full Stack Developer</p>
                      <div className="flex justify-center space-x-6 mt-4">
                      
                        <div className="text-center">
                          <div className="text-2xl font-bold text-pink-400">∞</div>
                          <div className="text-xs text-gray-400">Passion</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 glass w-16 h-16 flex items-center justify-center text-2xl"
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚡
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 glass w-20 h-20 flex items-center justify-center text-3xl"
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🚀
                </motion.div>
              </motion.div>
            </div>

            {/* Interactive Skills Chart */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white text-center mb-8">Technical Expertise</h4>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Story Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tab Navigation */}
            <div className="flex space-x-2 mb-8">
              {tabs.map((tab, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'glass-strong text-white border-purple-500/50'
                      : 'glass text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span>{tab.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="card-premium p-8 space-y-6"
              >
                <h3 className="text-3xl font-bold gradient-text">
                  {tabs[activeTab].content.heading}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {tabs[activeTab].content.text}
                </p>
                
                {/* Interactive Elements based on active tab */}
                {activeTab === 0 && (
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="glass p-4 text-center">
                      <div className="text-2xl mb-2">🎓</div>
                      <div className="text-sm text-gray-400">Continuous Learning</div>
                    </div>
                    <div className="glass p-4 text-center">
                      <div className="text-2xl mb-2">💻</div>
                      <div className="text-sm text-gray-400">Code Craftsmanship</div>
                    </div>
                  </div>
                )}
                
                {activeTab === 1 && (
                  <div className="space-y-4">
                    {['Clean Code', 'User-Centric Design', 'Scalable Architecture'].map((principle, i) => (
                      <motion.div
                        key={principle}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-3 glass p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                        <span className="text-gray-300">{principle}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {activeTab === 2 && (
                  <div className="glass p-6 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🌟</div>
                      <p className="text-purple-300 font-medium">
                        &ldquo;Technology is best when it brings people together.&rdquo; - Matt Mullenweg
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <motion.a
                href="#projects"
                className="btn-primary group flex-1 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <motion.svg 
                    className="w-5 h-5"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.a>
              
              <motion.button
                className="btn-secondary group flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Download CV
                  <motion.svg 
                    className="w-5 h-5"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ y: 3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Approach Section */}
      <Approach />
    </section>
  );
};

const Approach = () => {
  return (
    <section className="w-full py-20">
      {/* Revolutionary Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative inline-block"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-cyan-400 mb-8 relative">
            MY APPROACH
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <p className="text-2xl text-gray-300 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
            From Concept to Deployment:{" "}
            <span className="gradient-text font-semibold">My Three-Phase Development Process</span>
          </p>
        </motion.div>
      </motion.div>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add des prop */}
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="First of all, I plan the structures, design and functionalities with the help of different tools like Figma, Cranq and other GUI-based tools. Then, I build a client-side prototype of the web-application using Figma."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once I'm agree with the structures, design and the functionalities of the project, I initialize a Git repository and connect it with my GitHub repository. I commit every single major updates using Git Commit Messages and explain with a long description."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // change bg-black to bg-pink-900
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              // change the colors of the
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          {/* remove this one */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="After the development of the project, I convert the project into a build version for deploying and hosting into a network server, usually Vercel, Heroku or Netlify (that's why, I use frameworks and libraries like NextJS and React)."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
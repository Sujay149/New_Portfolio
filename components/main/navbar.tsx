"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "@/components/sub/contact-modal";
import { MdOutlineMail } from "react-icons/md";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/40 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-purple-500/10' 
          : 'bg-black/20 backdrop-blur-xl border-b border-white/10'
      }`}
      style={{
        boxShadow: scrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
          : '0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="flex items-center justify-between h-[80px] px-6 md:px-12 max-w-7xl mx-auto">
        {/* Enhanced Logo & Name */}
        <Link 
          href="#about-me" 
          className="flex items-center gap-3 group" 
          onClick={closeMenu}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={45}
              height={45}
              draggable={false}
              className="cursor-pointer drop-shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-30 rounded-full blur-lg transition-opacity duration-300" />
          </motion.div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-lg gradient-text">
              Sujay
            </div>
            <div className="text-gray-400 text-sm font-medium">
              Full Stack Developer
            </div>
          </div>
        </Link>

        {/* Enhanced Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 bg-black/60 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 shadow-lg shadow-purple-500/20">
          {NAV_LINKS.map((link, index) => (
            <motion.div key={link.title}>
              <Link 
                href={link.link} 
                className="relative px-4 py-2 text-gray-200 hover:text-white transition-all duration-300 font-medium rounded-lg group"
              >
                <span className="relative z-10">{link.title}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Hire Me Button (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <motion.button
            onClick={() => setIsContactOpen(true)}
            className="btn-primary group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Hire me"
          >
            <span className="relative z-10 flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MdOutlineMail className="h-5 w-5" />
              </motion.div>
              Hire Me
            </span>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl rounded-lg border border-white/20 shadow-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.div
            className="w-6 h-0.5 bg-white rounded-full"
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white rounded-full mt-1.5"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white rounded-full mt-1.5"
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: 300, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-80 h-screen bg-black/90 backdrop-blur-2xl shadow-2xl flex flex-col z-50 md:hidden border-l border-white/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="text-white font-semibold text-lg gradient-text">Menu</div>
                <motion.button
                  className="w-10 h-10 flex items-center justify-center bg-black/60 backdrop-blur-xl rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
                  onClick={closeMenu}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-xl">✖</span>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={link.link} 
                      onClick={closeMenu} 
                      className="text-xl font-medium text-gray-300 hover:text-white hover:gradient-text transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/5"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Hire Me Button */}
              <div className="p-6 border-t border-white/10">
                <motion.button 
                  onClick={() => {
                    setIsContactOpen(true);
                    closeMenu();
                  }} 
                  className="w-full btn-primary"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <MdOutlineMail className="h-5 w-5" />
                    Hire Me
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "@/components/sub/contact-modal";
import { MdOutlineMail } from "react-icons/md";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50">
      <div className="flex items-center justify-between h-[70px] px-5 md:px-10">
        {/* Logo & Name */}
        <Link 
          href="#about-me" 
          className="flex items-center gap-2" 
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            draggable={false}
            className="cursor-pointer"
          />
          <span className="hidden sm:block text-white font-bold tracking-wide">
            I&apos;m Sujay | Fullstack Developer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 bg-[rgba(3,0,20,0.37)] px-8 py-2 rounded-full border border-[rgba(112,66,248,0.38)] text-gray-200">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.title} 
              href={link.link} 
              className="hover:text-[rgb(112,66,248)] transition font-medium"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Hire Me Button (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-95 shadow-sm"
            aria-label="Hire me"
          >
            <MdOutlineMail className="h-5 w-5" />
            <span>Hire me</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

  <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-[#030014]/80 backdrop-blur-lg shadow-lg flex flex-col items-center justify-center text-gray-300 md:hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-6 text-white text-3xl"
              onClick={closeMenu}
            >
              ✖
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col items-center space-y-8 text-lg font-medium">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.title} 
                  href={link.link} 
                  onClick={closeMenu} 
                  className="hover:text-[rgb(112,66,248)] transition"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Mobile Hire Me Button */}
            <div className="mt-10">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-700 to-cyan-500 text-white rounded-lg font-medium shadow-sm">
                <MdOutlineMail className="h-5 w-5" />
                <span>Hire me</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

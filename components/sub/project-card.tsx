"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  logo?: string;
  title: string;
  description: string;
  tags: string[];
  live: string;
  code: string;
  preview?: string; // video or image path
};

export const ProjectCard = ({ logo, title, description, tags, live, code, preview }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-glass backdrop-blur-2xl border border-white/10 shadow-premium hover:border-white/20 transition-all duration-500"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl" />
      
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      {/* Preview area with enhanced styling */}
      <div className="relative w-full h-48 bg-gradient-to-br from-primary-900/20 to-secondary-900/20 flex items-center justify-center overflow-hidden">
        {preview ? (
          preview.endsWith('.webm') ? (
            <video 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src={preview} 
              autoPlay 
              loop 
              muted 
              playsInline 
            />
          ) : (
            <Image 
              src={preview} 
              alt={`${title} preview`} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              style={{ objectPosition: 'center' }} 
            />
          )
        ) : (
          <div className="w-full h-full bg-gradient-primary flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="text-white text-4xl font-bold z-10 drop-shadow-lg">{title.charAt(0)}</div>
            {/* Animated background shapes */}
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 animate-float" />
            <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-white/5 animate-pulse" />
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Project Type Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="glass px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md border border-white/20">
            Project
          </span>
        </div>
      </div>

      {/* Content with enhanced styling */}
      <div className="relative p-6 space-y-4">
        {/* Title and Description */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Enhanced Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span 
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong px-3 py-1 text-xs font-medium text-white/80 border border-white/10 
                         hover:border-primary-400/30 hover:text-primary-300 hover:bg-primary-500/10 
                         transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Enhanced Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex space-x-3">
            {live && (
              <Link 
                href={`https://${live}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/link inline-flex items-center gap-2 px-4 py-2 btn-secondary text-sm font-medium transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Live Demo</span>
                <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            )}
            {code && (
              <a 
                href={code} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-github group/github"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover/github:rotate-12 transition-transform duration-300"
                >
                  <path
                    d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                    fill="currentcolor"
                  />
                </svg>
                <span>Source</span>
              </a>
            )}
          </div>
          
          {/* Explore Button */}
          <motion.button 
            whileHover={{ x: 5 }}
            className="group/explore text-primary-400 hover:text-primary-300 text-sm font-medium transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore</span>
            <svg className="w-4 h-4 group-hover/explore:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </div>
      </div>
      
      {/* Bottom shine effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

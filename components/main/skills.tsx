
"use client";

import React, { useState } from "react";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";


export const Skills = () => {
  const [search, setSearch] = useState("");

  // Combine all skills and deduplicate by skill_name
  const allSkillsRaw = [
    ...SKILL_DATA,
    ...FRONTEND_SKILL,
    ...BACKEND_SKILL,
    ...FULLSTACK_SKILL,
    ...OTHER_SKILL,
  ];
  const seen = new Set();
  const allSkills = allSkillsRaw.filter((skill) => {
    if (seen.has(skill.skill_name.toLowerCase())) return false;
    seen.add(skill.skill_name.toLowerCase());
    return true;
  });

  // Enhanced search functionality like e-commerce sites
  const filteredSkills = search.trim()
    ? allSkills.filter((skill) => {
        const searchTerm = search.trim().toLowerCase();
        const skillName = skill.skill_name.toLowerCase();
        
        // Search by exact match, starts with, or contains
        return skillName === searchTerm || 
               skillName.startsWith(searchTerm) || 
               skillName.includes(searchTerm);
      })
    : allSkills;

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 w-full relative overflow-visible py-12 md:py-20 px-4"
    >
      <SkillText />

      {/* Search Bar */}
      <div className="w-full flex justify-center mb-8 relative z-20">
        <div className="relative w-full max-w-lg z-30">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search skills... (e.g. React, JavaScript, Node)"
            className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-purple-400/50 bg-black/60 backdrop-blur-md shadow-xl text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-400 relative z-40"
            style={{ 
              boxShadow: '0 8px 32px 0 rgba(139, 69, 255, 0.15)',
              background: 'rgba(0, 0, 0, 0.6)',
              pointerEvents: 'auto',
              position: 'relative',
              zIndex: 50
            }}
            autoComplete="off"
            tabIndex={0}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-30">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-12 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors z-40"
              style={{ pointerEvents: 'auto' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Search Results Info */}
      {search && (
        <div className="mb-4 text-center">
          <p className="text-purple-300 text-sm">
            {filteredSkills.length > 0 
              ? `Found ${filteredSkills.length} skill${filteredSkills.length !== 1 ? 's' : ''} matching "${search}"`
              : `No skills found for "${search}"`
            }
          </p>
        </div>
      )}

      {/* Responsive Skills Grid for small/medium screens (hidden on large) */}
      {filteredSkills.length > 0 ? (
        <>
          <div className="w-full max-w-6xl block lg:hidden">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
              {filteredSkills.map((skill, i) => (
                <div className="flex justify-center" key={skill.skill_name + i}>
                  <SkillDataProvider
                    src={skill.image}
                    name={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Large-screen: restore previous three-row layout (7 / 5 / 3) */}
          <div className="w-full max-w-6xl hidden lg:flex flex-col gap-6 items-center">
            {/* First row: 7 skills */}
            <div className="flex flex-row justify-center gap-6">
              {filteredSkills.slice(0, 7).map((skill, i) => (
                <div className="px-10" key={skill.skill_name + i}>
                  <SkillDataProvider
                    src={skill.image}
                    name={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                    index={i}
                  />
                </div>
              ))}
            </div>

            {/* Second row: next 5 skills */}
            {filteredSkills.length > 7 && (
              <div className="flex flex-row justify-center gap-8">
                {filteredSkills.slice(7, 12).map((skill, i) => (
                  <div className="px-8" key={skill.skill_name + (i + 7)}>
                    <SkillDataProvider
                      src={skill.image}
                      name={skill.skill_name}
                      width={skill.width}
                      height={skill.height}
                      index={i + 7}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Third row: next 3 skills */}
            {filteredSkills.length > 12 && (
              <div className="flex flex-row justify-center gap-8">
                {filteredSkills.slice(12, 15).map((skill, i) => (
                  <div className="px-8" key={skill.skill_name + (i + 12)}>
                    <SkillDataProvider
                      src={skill.image}
                      name={skill.skill_name}
                      width={skill.width}
                      height={skill.height}
                      index={i + 12}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="text-lg text-gray-400">No skills found.</div>
      )}

      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto object-cover"
            preload="metadata"
            playsInline
            loop
            muted
            autoPlay
            onError={(e) => {
              console.log("Video error:", e);
              e.currentTarget.style.display = 'none';
            }}
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

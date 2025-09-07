import React from "react";
import Image from "next/image";
import { EducationItem } from "@/constants/education-meta";

interface Props {
  src: string;
  title: string;
  institution: string;
  duration: string;
  description: string;
  degree: string;
  grade?: string;
  achievements?: string[];
  index: number;
  url?: string;
}

const EducationCard = ({
  src,
  title,
  institution,
  duration,
  description,
  degree,
  grade,
  achievements,
  index,
  url,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-transparent backdrop-blur-md">
      {/* Preview Image */}
      <div className="relative w-full h-48">
        {src ? (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
            <div className="text-white text-4xl font-bold">
              {institution.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="flex justify-between items-start mb-3">
          {/** Title - link to external url if provided */}
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-white hover:underline">
              {title}
            </a>
          ) : (
            <h1 className="text-xl font-semibold text-white">{title}</h1>
          )}
          <span className="text-sm px-3 py-1 rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/30">
            {degree}
          </span>
        </div>

        <div className="mb-2">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-cyan-400 hover:underline">
              {institution}
            </a>
          ) : (
            <h2 className="text-lg font-medium text-cyan-400">{institution}</h2>
          )}
          <p className="text-sm text-gray-300">{duration}</p>
          {grade && (
            <p className="text-sm text-green-400 font-medium">Grade: {grade}</p>
          )}
        </div>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-purple-300 mb-2">Key Achievements:</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              {achievements.slice(0, 3).map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
          </div>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;

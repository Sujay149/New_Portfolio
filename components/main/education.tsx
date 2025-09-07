import React from "react";
import EducationCard from "../sub/education-card";
import { EDUCATION_META } from "@/constants/education-meta";

const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Education
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {EDUCATION_META.map((education, index) => (
            <EducationCard
              key={education.id}
              src={education.image || ""}
              title={education.title}
              institution={education.institution}
              duration={education.duration}
              description={education.description || ""}
              degree={education.degree}
              grade={education.grade}
              achievements={education.achievements}
              index={index}
              url={education.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

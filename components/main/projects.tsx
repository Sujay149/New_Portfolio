import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { PROJECTS_META } from "@/constants/projects-meta";
import { ExperienceCard } from "@/components/sub/experience-card";
import { EXPERIENCE_META } from "@/constants/experience-meta";

export const Projects = () => {
  return (
    <>
      {/* Experience Section */}
      <section
        id="experience"
        className="flex flex-col items-center justify-center py-20"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Experience
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10 justify-center items-stretch">
          {EXPERIENCE_META.map((exp) => (
            <ExperienceCard key={exp.company + exp.role} {...exp} tags={exp.tags.filter((tag): tag is string => typeof tag === "string")} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="flex flex-col items-center justify-center py-20"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10 justify-center items-stretch">
          {PROJECTS_META.map((meta, idx) => (
            <ProjectCard
              key={meta.title}
              logo={meta.logo}
              title={meta.title}
              description={PROJECTS[idx]?.description || ""}
              tags={meta.tags}
              live={meta.live}
              code={meta.code}
              preview={meta.preview}
            />
          ))}
        </div>
      </section>
    </>
  );
};

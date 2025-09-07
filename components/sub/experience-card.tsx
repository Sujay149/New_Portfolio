import Link from "next/link";

type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
  code?: string;
};

export const ExperienceCard = ({ company, role, period, description, tags, link, code }: ExperienceCardProps) => {
  return (
    <div className="flex flex-col bg-transparent rounded-2xl p-8 w-full max-w-md min-h-[300px] justify-between border border-white/10">
      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-1">{company}</h2>
        <div className="text-base text-purple-500 font-semibold mb-1">{role}</div>
        <div className="text-sm text-gray-400 mb-2">{period}</div>
        <p className="text-gray-700 dark:text-gray-200 text-base mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((t) => (
            <span key={t} className="bg-gray-100/40 dark:bg-white/10 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4">
        {link && link !== "#" && (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-500 hover:underline text-sm">
            🌐 Website
          </Link>
        )}

      
      </div>
    </div>
  );
};
